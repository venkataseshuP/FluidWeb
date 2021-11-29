import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { RightMenuComponent } from '../right-menu/right-menu.component';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @ViewChild('rightMenu') rightMenu:RightMenuComponent;
  dragOver = '-1';
  activeTabContent = {};
  constructor(public dataService:ParentDataService) { 
    this.activeTabContent = this.dataService.getActiveTabContent();
  }
  ngOnInit(): void {
    this.activeTabContent = this.dataService.getActiveTabContent();
  }

  drop(index){
    event.stopPropagation();
      this.activeTabContent['save'] = true;
      let type = this.activeTabContent['dragelement']['elementtype'];
      if(index == -1){
        this.activeTabContent['elements'].push(this.dataService.getTypeJson(type));
      }else{
        this.activeTabContent['elements'].splice(index+1,0,this.dataService.getTypeJson(type));
      }

      this.dragOver = '-3';
  }

  dragStart(value){

  }

  dragOverElement(value){
    event.preventDefault();
  }

  dragEnd(value){

  }

  addcustomcss(id,customcss){
    let element = document.getElementById(id);
    if(element != null)
    element.setAttribute("style",customcss);
  }



}
