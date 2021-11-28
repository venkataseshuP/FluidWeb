import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { isConstructorDeclaration } from 'typescript';
import { AuthService } from '../services/auth-service';
import { auth, firestore } from 'firebase/app';
import { ParentDataService } from '../../dataService';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public dataService:ParentDataService,
    public userService:UserService
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          if(!this.dataService.activeProjectId){
            this.authService.SignOut();
          }else{
            this.router.navigate(['home']);
          }          
        } else {
          this.router.navigate(['sign-in']);
        }
      })
      return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
