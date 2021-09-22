import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './explorer/explorer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { AppsComponent } from './apps/apps.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component:ExplorerComponent,canActivate:[AuthGuard],
  },
  {
    path: "apps",
    component:AppsComponent,
  },
  {
    path:"sign-in",
    component:SignInComponent,
  },
  {
    path:"sign-up",
    component:SignUpComponent,
  },
  {
    path:"verify-email",
    component:VerifyEmailComponent,
  },
  {
    path:"forgot-password",
    component:ForgotPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
