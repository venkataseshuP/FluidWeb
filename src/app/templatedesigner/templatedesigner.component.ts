import { Component, HostListener, OnInit } from '@angular/core';
import { TemplateService } from '../shared/services/template.service'; 


@Component({
  selector: 'app-templatedesigner',
  templateUrl: './templatedesigner.component.html',
  styleUrls: ['./templatedesigner.component.css']
})
export class TemplatedesignerComponent implements OnInit {

  constructor(
    public templateService:TemplateService,
  ) { }

  ngOnInit(): void {
  }

  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  openContextmenu(event){
    event.preventDefault();
    this.contextmenuX = event.clientX;
    this.contextmenuY = event.clientY;
    this.contextmenu = true;
    setTimeout(()=>{
      let element = document.getElementById("contextmenu");
      let width = window.screen.width;
      let height = window.screen.height;
      let elementheight = element.offsetHeight;
      let elementwidth = element.offsetWidth;
      if(this.contextmenuX+elementwidth >width){
        this.contextmenuX = event.clientX-elementwidth;
      }
      if(this.contextmenuY+elementheight >height){
        this.contextmenuY = event.clientY-elementheight;
      }
    },100);
  }

  disableContextMenu() {
    this.contextmenu = false;
  }

  stopemitting(event){
    event.stopPropagation();
  }

  @HostListener('document:click')clickout() {
    event.stopPropagation();
    this.disableContextMenu();
  }

  addNewComplextype(){
    this.templateService.addNewNativeComponent('CT');
  }

  addNewSimpletype(){
    this.templateService.addNewNativeComponent('ST');
  }

}
