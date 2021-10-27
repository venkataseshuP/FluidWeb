import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIRepo } from '../../model/apirepo.model';
import { AlertService } from '../../shared/services/alert.service';
import { ApiService } from '../../shared/services/api.service';
import { ApidesignerTabsComponent } from '../apidesigner-tabs/apidesigner-tabs.component';

@Component({
  selector: 'app-apidesigner',
  templateUrl: './apidesigner.component.html',
  styleUrls: ['./apidesigner.component.css']
})
export class ApidesignerComponent implements OnInit {

  @ViewChild('apiTabs') apiTabs:ApidesignerTabsComponent;
  
  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  constructor(private apiService:ApiService,
    private alertService:AlertService,
    public dataService:ParentDataService) { }

  ngOnInit(): void {
    this.apiService.refreshAPIs();
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

  createAPI(method:string){
    this.apiService.createAPI(method).subscribe((data)=>{
      if(data){
        this.alertService.showAlert(1,'successfully added api');
        this.refreshAPIs();
      }
    });
  }

  refreshAPIs(){
    this.apiService.refreshAPIs();
  }

  openApiTab(api:APIRepo){
    this.apiTabs.open(api);
  }

}
