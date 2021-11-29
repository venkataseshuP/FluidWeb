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
  
  transparentbackgroundurl="url('../../assets/images/fluiddesigner/transparentbackground.png')";
  activeTabContent = {};
  constructor(public dataService:ParentDataService) {
   }

  ngOnInit(): void {
    this.activeTabContent = this.dataService.getActiveTabContent();
  }

  refresh(){
    // call the API and assign the data to this.dataService.tabs[this.dataService.activeTabId]['elements']
    this.activeTabContent = this.dataService.getActiveTabContent();
  }

}
