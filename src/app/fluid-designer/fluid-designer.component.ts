import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentDataService } from '../dataService';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { AssetsComponent } from './assets/assets.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { CodeComponent } from './code/code.component';

@Component({
  selector: 'app-fluid-designer',
  templateUrl: './fluid-designer.component.html',
  styleUrls: ['./fluid-designer.component.css']
})
export class FluidDesignerComponent implements OnInit {

  @ViewChild('leftMenu') leftMenu:LeftMenuComponent;
  @ViewChild('assets') assets:AssetsComponent;
  @ViewChild('rightMenu') rightMenu:RightMenuComponent;
  @ViewChild('code') code:CodeComponent;
  
  transparentbackgroundurl="url('../../assets/images/fluiddesigner/transparentbackground.png')"
  constructor(public dataService:ParentDataService) {
   }

  ngOnInit(): void {
  }

  refresh(){
    
    let id = this.dataService.tabs[this.dataService.activeTabId]['id'];
    if(this.dataService.ui[id])
      this.dataService.tabs[this.dataService.activeTabId]['elements'] = this.dataService.ui[id]['elements']
  }

}
