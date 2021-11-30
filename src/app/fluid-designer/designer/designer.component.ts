import { Component, OnInit, HostListener, ViewChild, Output, EventEmitter } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { RightMenuComponent } from '../right-menu/right-menu.component';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @ViewChild('rightMenu') rightMenu:RightMenuComponent;
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
    this.dataService.drop(index);
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

  refreshData(elementData){
    this.refresh.emit(elementData);
  }

}
