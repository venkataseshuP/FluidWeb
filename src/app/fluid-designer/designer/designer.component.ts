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
  constructor(public dataService:ParentDataService) { 
  }
  ngOnInit(): void {
    
  }

  drop(index){
    event.stopPropagation();
      this.dataService.load = true;
      this.dataService.tabs[this.dataService.activeTabId]['save'] = true;
      let type = this.dataService.tabs[this.dataService.activeTabId]['dragelement']['elementtype'];
      if(index == -1){
        this.dataService.tabs[this.dataService.activeTabId]['elements'].push(this.dataService.getTypeJson(type));
      }else{
        this.dataService.tabs[this.dataService.activeTabId]['elements'].splice(index+1,0,this.dataService.getTypeJson(type));
      }

      this.dragOver = '-3';
      this.dataService.load = false;
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
