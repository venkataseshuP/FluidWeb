import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { FluidDesignerComponent } from './fluid-designer/fluid-designer.component';
import { ParentDataService } from './dataService';
import { fluiddesignerModule } from './fluid-designer/fluid-designer.module';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthService } from './shared/services/auth-service';
import { HttpClientModule } from '@angular/common/http';
import { SwaggeruiComponent } from './swaggerui/swaggerui.component';
import { SwaggereditorComponent } from './swaggereditor/swaggereditor.component';



@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    FluidDesignerComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SwaggeruiComponent,
    SwaggereditorComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    fluiddesignerModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ParentDataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
