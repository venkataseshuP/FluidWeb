import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { Typesrepo } from '../../model/typesrepo.model';

@Component({
  selector: 'app-elementtree-tabs',
  templateUrl: './elementtree-tabs.component.html',
  styleUrls: ['./elementtree-tabs.component.css']
})
export class ElementtreeTabsComponent implements OnInit {

  @Output() refreshdata = new EventEmitter<Typesrepo>();

  tabWidth=258;
  activeDragId;
  activeDropId;
  constructor(public dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  realignTabs(){
    let width = ((window.innerWidth-458)/this.getTabs().length);
    this.tabWidth = width<258?width:258;
  }

  async openTab(tabId){
    if(this.getActiveTabContent()['activeTabId'] != tabId){
      this.getActiveTabContent()['activeTabId'] = tabId;
      this.realignTabs();
      this.refreshdata.emit();
    }
  }

  getActiveTabContent(){
    return this.dataService.getActiveTabContent();
  }

  getTabs(){
    let tabs = this.getActiveTabContent()['tabs'];
    if(!tabs){
      this.getActiveTabContent()['tabs'] = [];
    }
    return this.getActiveTabContent()['tabs'];
  }

  getActiveTabId(){
    return this.dataService.getActiveTabContent()['activeTabId'];
  }

  refreshContent(){
    let type =  this.getTabs()[this.getActiveTabId()].type;

  }

  closeTab(i){

    if( this.getActiveTabId() == i){
      if(i>0){
        this.openTab(i-1);
      }else{
        this.openTab(i);
      }
    }else if( this.getActiveTabId()<i){
      this.openTab( this.getActiveTabId());
    }else{
      this.openTab( this.getActiveTabId()-1);
    }
      this.getTabs().splice(i,1);
  }

  dragEnter(Id){
    event.preventDefault();
    if(this.activeDragId>=0){
      this.activeDropId=Id;
    }
  }

  dragOver(event){
     event.preventDefault();
  }

  dragDrop(Id){
    if(this.activeDragId>=0){
    let temp=  this.getTabs()[this.activeDragId];
    this.removeTab(this.activeDragId);
      this.getTabs().splice(Id, 0, temp);
    this.openTab(Id);
  }else{
    this.activeDropId=-1;
    this.activeDragId=-1;
  }
  }

  dragStart(id){
    this.activeDragId=id;
  }
  dragEnd(type){
     this.activeDropId=-1;
     this.activeDragId=-1;
  }

  removeTab(index){
    if(index>=0){
        this.getTabs().splice(index,1);
      if( this.getActiveTabId()>index){
        this.openTab( this.getActiveTabId()-1);
      }else if( this.getActiveTabId() == index){
        if(index == 0){
          if(  this.getTabs().length>0)
          this.openTab(index);
        }else{
          this.openTab(index-1);
        }
      }
    }
  }

  close(event){


  }

  async open(typedata:Typesrepo){
    event.stopPropagation();
    if(this.checkTabs(typedata.id.typeId)){
      return;
    }else{
      await this.addNewTab(typedata)
    }
  }

  async addNewTab(typedata:Typesrepo){
    this.dataService.load = true;
      let tabjson = {
        "desc":typedata.typeName,
        "type":typedata.type,
        "id":typedata.id.typeId,
        "tabPrev":false,
        "tabNext":false,
        "prev":false,
        "next":false,
        "save":false,
        "bookmark":false,
        "locked":false,
        "error":false,
        "tabDesc":typedata.desc,
        "explorer":true,
        "list":false,
        "openElements":[]
      }
  
      await this.getTabs().push(tabjson);
      await this.openTab(this.getTabs().length-1);
      this.dataService.load = false;
    }
  
    checkTabs(id){
      for(let i = 0;i<this.getTabs().length;i++){
        if(this.getTabs()[i].id == id){
          this.openTab(i);
          return true;
        }
      }
      return false;
    }

}
