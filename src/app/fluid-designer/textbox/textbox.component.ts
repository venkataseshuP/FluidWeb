import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParentDataService } from '../../dataService';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() element:any;
  @Input() i:any;
  @Output() refresh = new EventEmitter<any>();
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
    if(!this.activeTabContent['internalDrag']){
    this.dataService.load = true;
    this.activeTabContent['save'] = true;
      let type = this.activeTabContent['dragelement']['elementtype'];
      if(index == -1){
        this.activeTabContent['elements'].push(this.dataService.getTypeJson(type));
      }else{
        this.activeTabContent['elements'].splice(index+1,0,this.dataService.getTypeJson(type));
      }

      this.dragOver = '-3';
      this.dataService.load = false;
    }else{

      this.activeTabContent['elements'].splice(this.activeTabContent['internalDragIndex'],1);
      this.activeTabContent['elements'].splice(index,0,this.activeTabContent['dragelement']);

    }
  }

  dragStart(index,elementDetails){
    event.stopPropagation();
    this.activeTabContent['dragelement'] = elementDetails;
    this.activeTabContent['internalDrag'] = true;  
    this.activeTabContent['internalDragIndex'] = index;  

  }

  dragOverElement(value){
    event.preventDefault();
  }

  dragEnd(value){
    this.dragOver = '-1';
    this.activeTabContent['internalDrag'] = false; 
    this.activeTabContent['internalDragIndex'] = -1;   
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

  activateElement(){
    event.stopPropagation();
    this.activeTabContent['activeelement'] = this.i;
    this.refresh.emit(this.element);
  }


}
