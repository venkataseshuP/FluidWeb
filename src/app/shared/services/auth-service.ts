import { UserService } from './user.service';
import { Injectable, NgZone, ViewChild } from '@angular/core';
import { User } from "../services/user";
import { auth, firestore } from 'firebase/app';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ParentDataService } from '../../dataService';
import { ExplorerComponent } from '../../explorer/explorer.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  projects:any;
  activeProjectId:string = "P_0000001";
  @ViewChild('explorer') explorer: ExplorerComponent;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,
    public dataService: ParentDataService, // NgZone service to remove outside scope warning
    public deviceService: DeviceDetectorService,
    public userService:UserService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('logged', '0');
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['sign-in']);
      }
    })
  }

  // Sign in with email/password
  async SignIn(email, password) {
    this.dataService.load = true;
    return await this.afAuth.signInWithEmailAndPassword(email, password)
      .then(async (result) => {
          // await this.getUserProperties(result.user);
          await this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
          this.dataService.load = false;
      }).catch((error) => {
        window.alert(error.message);
        this.dataService.load = false;
      })
  }

  // Sign up with email/password
  async SignUp(email, password) {
    this.dataService.load = true;
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        await this.SendVerificationMail();
        await this.SetUserData(result.user);
        await this.SetUserProperties(result.user);
        this.dataService.load = false;
      }).catch((error) => {
        window.alert(error.message);
        this.dataService.load = false;
      })
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email']);
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  async GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider())
    .then(async (result) => {
      this.dataService.load = true;
      await this.SetUserData(result['user']);
      //await this.SetUserProperties(result['user']);
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      })
    }).catch((error) => {
      //window.alert(error);
      this.dataService.load = false;
    });
  }

  // Auth logic to run auth providers
  async AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then(async (result) => {
        this.dataService.load = true;
        await this.SetUserData(result.user);
        await this.SetUserProperties(result.user);
        this.dataService.load = false;
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
      }).catch((error) => {
        window.alert(error);
        this.dataService.load = false;
      })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    }
    this.userService.createUser(userData);
    this.projects = this.userService.getUserDetails(userData)['projects'];
    return userRef.set(userData, {
      merge: true
    })

  }

  SetUserProperties(user) {
    const userProjectProperties: AngularFirestoreDocument<any> = this.afs.doc(`userProjectProperties/${user.uid}`);

    const properties = {
      tabs: this.dataService.tabs,
      explorerMenu: this.dataService.explorerMenu,
      activetabId: this.dataService.activeTabId,
      selectedItemDetails: this.dataService.selectedItemDetails,
      ui:this.dataService.ui,
    }

    return userProjectProperties.set(properties, { merge: true })
  }


  async getUserProperties(user) {
    var docRef = this.afs.collection("userProjectProperties").doc(`${user.uid}`);

    let elethis = this;
    await docRef.get().toPromise().then(function (doc) {
      elethis.setproperties(doc.data());
    }).catch(function (error) {
      console.log("Error getting cached document:", error);
    });

  }


  setproperties(data) {
    this.dataService.load = true;
    this.dataService.tabs = data.tabs;
    this.dataService.explorerMenu = data.explorerMenu;
    this.dataService.activeTabId = data.activetabId == undefined ? 0 : data.activetabId;
    if (data.selectedItemDetails) {
      this.dataService.selectedItemDetails = data.selectedItemDetails;
    } else {
      this.dataService.selectedItemDetails = {
        path: '',
      };
    }
    if (data.ui) {
      this.dataService.ui = data.ui;
    } else {
      this.dataService.ui = {
      };
    }
    this.dataService.load = false;
  }

  // Sign out
  async SignOut() {
    this.dataService.load = true;
    return await this.afAuth.signOut().then(async () => {
      this.router.navigate(['sign-in']);
      this.dataService.load = false;
    })
  }

  getUserFirstLetter(){
    if(this.userData)
      return this.userData.displayName[0];
    else
      return "G"
  }

  async savedata() {
    // let user = JSON.parse(localStorage.getItem('user'))
    // const userProjectProperties: AngularFirestoreDocument<any> = this.afs.doc(`userProjectProperties/${user.uid}`);
    // const properties = {
    //   tabs: this.dataService.tabs,
    //   explorerMenu: this.dataService.explorerMenu,
    //   activetabId: this.dataService.activeTabId,
    //   selectedItemDetails: this.dataService.selectedItemDetails,
    //   ui:this.dataService.ui,
    // }
    // return userProjectProperties.set(properties, { merge: true })
  }

  async saveExplorerMenu() {
    let user = JSON.parse(localStorage.getItem('user'))
    const userProjectProperties: AngularFirestoreDocument<any> = this.afs.doc(`userProjectProperties/${user.uid}`);
    const properties = {
      explorerMenu: this.dataService.explorerMenu,
      selectedItemDetails: this.dataService.selectedItemDetails,
    }
    return userProjectProperties.set(properties, { merge: true })
  }

  async saveTabData() {
    let user = JSON.parse(localStorage.getItem('user'))
    const userProjectProperties: AngularFirestoreDocument<any> = this.afs.doc(`userProjectProperties/${user.uid}`);
    const properties = {
      tabs: this.dataService.tabs,
      activetabId: this.dataService.activeTabId,
      selectedItemDetails: this.dataService.selectedItemDetails,
    }
    return userProjectProperties.set(properties, { merge: true })
  }

  async saveselectedItems() {
    let user = JSON.parse(localStorage.getItem('user'))
    const userProjectProperties: AngularFirestoreDocument<any> = this.afs.doc(`userProjectProperties/${user.uid}`);
    const properties = {
      selectedItemDetails: this.dataService.selectedItemDetails,
    }
    return userProjectProperties.set(properties, { merge: true })
  }

  async saveui(){
    let user = JSON.parse(localStorage.getItem('user'))
    const userProjectProperties: AngularFirestoreDocument<any> = this.afs.doc(`userProjectProperties/${user.uid}`);
    const properties = {
      ui: this.dataService.ui,
      tabs: this.dataService.tabs,
      activetabId: this.dataService.activeTabId,
      selectedItemDetails: this.dataService.selectedItemDetails,
    }

    return userProjectProperties.set(properties, { merge: true })
  }

}
