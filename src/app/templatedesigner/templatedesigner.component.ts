import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { ElementtreeComponent } from './elementtree/elementtree.component';
import { NativecomponentsComponent } from './nativecomponents/nativecomponents.component';
import { RefferedcomponentsComponent } from './refferedcomponents/refferedcomponents.component';
import { TemplateService } from '../shared/services/template.service'; 
import { Typesrepo } from '../model/typesrepo.model';


@Component({
  selector: 'app-templatedesigner',
  templateUrl: './templatedesigner.component.html',
  styleUrls: ['./templatedesigner.component.css']
})
export class TemplatedesignerComponent implements OnInit {

  @ViewChild('nativecomponents') nativecomponents :NativecomponentsComponent;
  @ViewChild('refferedcomponents') refferedcomponents :RefferedcomponentsComponent;
  @ViewChild('elementtree') elementtree :ElementtreeComponent;

  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  constructor(
    public templateService:TemplateService,
    public hotkeyService:HotkeysService
  ) {

    this.hotkeyService.add(new Hotkey('alt+s',(event: KeyboardEvent): boolean => {
      this.addNewSimpletype();
      return false;
    }));

    this.hotkeyService.add(new Hotkey('alt+c',(event: KeyboardEvent): boolean => {
      this.addNewComplextype();
      return false;
    }));

   }

  ngOnInit(): void {
  }


  refreshTemplate(){
    this.nativecomponents.refreshNativeComponents();
    this.refferedcomponents.refreshRefferedComponents();
    this.elementtree.refresh();
  }


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

  openTypeTab(typedata:Typesrepo){
    this.elementtree.opentab(typedata);
  }

}
