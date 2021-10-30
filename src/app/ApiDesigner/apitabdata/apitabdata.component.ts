import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIRepo } from '../../model/apirepo.model';
import { AlertService } from '../../shared/services/alert.service';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-apitabdata',
  templateUrl: './apitabdata.component.html',
  styleUrls: ['./apitabdata.component.css']
})
export class ApitabdataComponent implements OnInit {

  @Output() refreshdata = new EventEmitter<APIRepo>();
  api:APIRepo;
  activeParamTabId = 0;
  constructor(private dataService:ParentDataService,
    private apiService:ApiService,
    private alert:AlertService) {
    this.api =  new APIRepo();
   }

  ngOnInit(): void {
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

  refresh(){
    this.getAPIDetails();
  }

  getAPIDetails(){  
    if(!this.getTabs()[this.getActiveTabId()])return;
    let apiId = this.getTabs()[this.getActiveTabId()].id;
    this.apiService.getAPIDetails(apiId).subscribe((data:APIRepo)=>{
      if(data){
        this.activeParamTabId = this.getActiveParamTabId();
        this.api = data;
      }
    });
  }

  update(){
    this.apiService.updateAPI(this.api).subscribe((data:APIRepo)=>{
      if(data){
        this.alert.showAlert(1,'update API data');
        this.updateTabMethodAndName(data);
        this.refreshdata.emit();
      }
    });
    
  }

  updateTabMethodAndName(api:APIRepo){
    let tabsdata = this.getTabs();
    let apitabActiveId = this.getActiveTabId();
    tabsdata[apitabActiveId]['type'] = api.method;
    tabsdata[apitabActiveId]['desc'] = api.apiName;
  }

  getActiveParamTabId(){
    let paramTabActiveId = this.getTabs()[this.getActiveTabId()]['paramTabActiveId'];
    return paramTabActiveId?paramTabActiveId:0;
  }

  setActiveParamTabId(id:number){
    this.getTabs()[this.getActiveTabId()]['paramTabActiveId'] = id;
    this.activeParamTabId = id;
  }

}
