import { Component, OnInit, Input } from '@angular/core';
import { ParentDataService } from '../../dataService';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  dragOver = '-1';
  constructor(public dataService:ParentDataService) { 
  }
  
  @Input() element:any;
  @Input() i:any;

  ngOnInit(): void {
  }

  drop(index){
    event.stopPropagation();
    if(!this.dataService.tabs[this.dataService.activeTabId]['internalDrag']){
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
    }else{

      this.dataService.tabs[this.dataService.activeTabId]['elements'].splice(this.dataService.tabs[this.dataService.activeTabId]['internalDragIndex'],1);
      this.dataService.tabs[this.dataService.activeTabId]['elements'].splice(index,0,this.dataService.tabs[this.dataService.activeTabId]['dragelement']);

    }
  }

  dragStart(index,elementDetails){
    event.stopPropagation();
    this.dataService.tabs[this.dataService.activeTabId]['dragelement'] = elementDetails;
    this.dataService.tabs[this.dataService.activeTabId]['internalDrag'] = true;  
    this.dataService.tabs[this.dataService.activeTabId]['internalDragIndex'] = index;  

  }

  dragOverElement(value){
    event.preventDefault();
  }

  dragEnd(value){
    this.dragOver = '-1';
    this.dataService.tabs[this.dataService.activeTabId]['internalDrag'] = false; 
    this.dataService.tabs[this.dataService.activeTabId]['internalDragIndex'] = -1;   
  }

  addcustomcss(id,customcss){
    let element = document.getElementById(id);
    let existStyles ;
    if(element != null){
     existStyles = element.getAttribute("style");
    element.setAttribute("style",customcss);
    }

    return true;
  }

  enablereadonly(id,flag){
    if(flag){
      let element = document.getElementById(id);
      element.style.background = 'lightgray';
    }

    return true;
  }


}
