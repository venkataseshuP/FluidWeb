import { Component, OnInit } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIRepo } from '../../model/apirepo.model';

@Component({
  selector: 'app-apidesigner-tabs',
  templateUrl: './apidesigner-tabs.component.html',
  styleUrls: ['./apidesigner-tabs.component.css']
})
export class ApidesignerTabsComponent implements OnInit {

  tabWidth=258;
  activeDragId;
  activeDropId;
  constructor(public dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  realignTabs(){
    let width = ((window.innerWidth-300)/this.getTabs().length);
    this.tabWidth = width<258?width:258;
  }

  async openTab(tabId){
    this.getActiveTabContent()['activeTabId'] = tabId;
    this.realignTabs();
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

  async open(apidata:APIRepo){
    event.stopPropagation();
    if(this.checkTabs(apidata.id.apiid)){
      return;
    }else{
      await this.addNewTab(apidata)
    }
  }

  async addNewTab(apidata:APIRepo){
    this.dataService.load = true;
      let tabjson = {
        "desc":apidata.apiName,
        "type":apidata.method,
        "id":apidata.id.apiid,
        "tabPrev":false,
        "tabNext":false,
        "prev":false,
        "next":false,
        "save":false,
        "bookmark":false,
        "locked":false,
        "error":false,
        "tabDesc":apidata.desc,
        "explorer":true,
        "list":false,
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
