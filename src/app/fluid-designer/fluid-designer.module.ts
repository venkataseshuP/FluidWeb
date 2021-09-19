import { FluidDesignerComponent } from "./fluid-designer.component";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { AssetsComponent } from './assets/assets.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { DesignerComponent } from './designer/designer.component';
import { TextboxComponent } from './textbox/textbox.component';
import { SvgassestsComponent } from './svgassests/svgassests.component';
import { LabelComponent } from './label/label.component';
import { BreakComponent } from './break/break.component';
import { LineComponent } from './line/line.component';
import { SpaceComponent } from './space/space.component';
import { CodeComponent } from './code/code.component';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      AceEditorModule      
    ],
    exports: [
      LeftMenuComponent,
      RightMenuComponent,
      AssetsComponent,
      DesignerComponent,
      TextboxComponent,
      SvgassestsComponent,
      LabelComponent,
      BreakComponent,
      LineComponent,
      SpaceComponent,
      CodeComponent,
    ],
    declarations: [
      LeftMenuComponent,
      RightMenuComponent,
      AssetsComponent,
      DesignerComponent,
      TextboxComponent,
      SvgassestsComponent,
      LabelComponent,
      BreakComponent,
      LineComponent,
      SpaceComponent,
      CodeComponent,
    ],
    bootstrap : [
      FluidDesignerComponent
    ],
    providers : [

    ]
  })

  export class fluiddesignerModule { 

  }