import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIRepo } from '../../model/apirepo.model';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-apitabdata',
  templateUrl: './apitabdata.component.html',
  styleUrls: ['./apitabdata.component.css']
})
export class ApitabdataComponent implements OnInit {

  @Output() refreshdata = new EventEmitter<APIRepo>();
  api:APIRepo;
  constructor(private dataService:ParentDataService,
    private apiService:ApiService) {
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
    let tabContent = this.getActiveTabContent();
    let apiId = tabContent['tabs'][tabContent['activeTabId']].id;
    this.apiService.getAPIDetails(apiId).subscribe((data:APIRepo)=>{
      if(data){
        this.api = data;
      }
    });
  }

  update(){
    this.apiService.updateAPI(this.api).subscribe((data:APIRepo)=>{
      if(data){
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

}
