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
import { AppsComponent } from './apps/apps.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { TemplatedesignerComponent } from './templatedesigner/templatedesigner.component';
import { NativecomponentsComponent } from './nativecomponents/nativecomponents.component';
import { RefferedcomponentsComponent } from './refferedcomponents/refferedcomponents.component';
import { ElementtreeComponent } from './elementtree/elementtree.component';
import { FormsModule } from '@angular/forms';
import { HotkeyModule } from 'angular2-hotkeys';
import { HighlightSearch } from './shared/pipes/HighlightSearch';
import { TemplateService } from './shared/services/template.service';
import { FileExplorerService } from './shared/services/file-explorer.service';
import { RefferedTemplateComponent } from './reffered-template/reffered-template.component';
import { ApidesignerComponent } from './ApiDesigner/apidesigner/apidesigner.component';
import { ApidesignerSideMenuComponent } from './ApiDesigner/apidesigner-side-menu/apidesigner-side-menu.component';
import { ApidesignerTabsComponent } from './ApiDesigner/apidesigner-tabs/apidesigner-tabs.component';
import { FlowDesignerComponent } from './FlowDesigner/flow-designer/flow-designer.component';
import { FlowDesignerSideMenuComponent } from './FlowDesigner/flow-designer-side-menu/flow-designer-side-menu.component';
import { FlowDesignerSettingsComponent } from './FlowDesigner/flow-designer-settings/flow-designer-settings.component';
import { ApidesignerSettingsComponent } from './ApiDesigner/apidesigner-settings/apidesigner-settings.component';
import { ApiExchangeComponent } from './ApiExchange/api-exchange/api-exchange.component';
import { ApiExchangeSideMenuComponent } from './ApiExchange/api-exchange-side-menu/api-exchange-side-menu.component';
import { ApiExchangeSettingsComponent } from './ApiExchange/api-exchange-settings/api-exchange-settings.component';
import { SwaggerUiComponent } from './ApiExchange/swagger-ui/swagger-ui.component';
import { SwaggerEditorComponent } from './ApiExchange/swagger-editor/swagger-editor.component';
import { JsonEditorComponent } from './JsonEditor/json-editor/json-editor.component';
import { AlertComponent } from './alert/alert.component';
import { EmptyComponent } from './empty/empty.component';
import { ApitabdataComponent } from './ApiDesigner/apitabdata/apitabdata.component';
import { PathparamsComponent } from './ApiDesigner/pathparams/pathparams.component';
import { QueryparamsComponent } from './ApiDesigner/queryparams/queryparams.component';
import { HeaderparamsComponent } from './ApiDesigner/headerparams/headerparams.component';
import { RequestTemplatesComponent } from './ApiDesigner/request-templates/request-templates.component';
import { ResponseTemplatesComponent } from './ApiDesigner/response-templates/response-templates.component';



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
    SwaggereditorComponent,
    AppsComponent,
    TemplatedesignerComponent,
    NativecomponentsComponent,
    RefferedcomponentsComponent,
    ElementtreeComponent,
    HighlightSearch,
    RefferedTemplateComponent,
    ApidesignerComponent,
    ApidesignerSideMenuComponent,
    ApidesignerTabsComponent,
    FlowDesignerComponent,
    FlowDesignerSideMenuComponent,
    FlowDesignerSettingsComponent,
    ApidesignerSettingsComponent,
    ApiExchangeComponent,
    ApiExchangeSideMenuComponent,
    ApiExchangeSettingsComponent,
    SwaggerUiComponent,
    SwaggerEditorComponent,
    JsonEditorComponent,
    AlertComponent,
    EmptyComponent,
    ApitabdataComponent,
    PathparamsComponent,
    QueryparamsComponent,
    HeaderparamsComponent,
    RequestTemplatesComponent,
    ResponseTemplatesComponent
  ],
  imports: [
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    fluiddesignerModule,
    AppRoutingModule,
    HttpClientModule,
    HotkeyModule.forRoot()
  ],
  providers: [ParentDataService,AuthService, TemplateService, FileExplorerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
