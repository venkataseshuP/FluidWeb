import { Component, Input, OnInit } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIQueryParam } from '../../model/apiquery-param.model';
import { APIRepo } from '../../model/apirepo.model';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-queryparams',
  templateUrl: './queryparams.component.html',
  styleUrls: ['./queryparams.component.css']
})
export class QueryparamsComponent implements OnInit {

  @Input() api:APIRepo;
  apiQueryParams:APIQueryParam[] = [];
  constructor(private apiService:ApiService, private dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.apiService.getQueryParams(this.api.id.apiid).subscribe((param:APIQueryParam[])=>{
      if(param){
        this.apiQueryParams = param;
      }
    })
  }

  deleteParam(param:APIQueryParam){
    this.apiService.deleteQueryParam(param).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    })
  }

  addParam(){
    let param =  new APIQueryParam();
    param.id.apiid = this.api.id.apiid;
    this.apiQueryParams.push(param);
  }

  updateParam(param:APIQueryParam){
    this.apiService.updateQueryParam(param).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    });
  }

}
