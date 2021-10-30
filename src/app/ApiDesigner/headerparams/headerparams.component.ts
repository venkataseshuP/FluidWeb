import { Component, Input, OnInit } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIHeaderParam } from '../../model/apiheader-param.model';
import { APIRepo } from '../../model/apirepo.model';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-headerparams',
  templateUrl: './headerparams.component.html',
  styleUrls: ['./headerparams.component.css']
})
export class HeaderparamsComponent implements OnInit {
  @Input() api:APIRepo;
  apiHeaderParams:APIHeaderParam[] = [];
  constructor(private apiService:ApiService, private dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.apiService.getHeaderParams(this.api.id.apiid).subscribe((param:APIHeaderParam[])=>{
      if(param){
        this.apiHeaderParams = param;
      }
    })
  }

  deleteParam(param:APIHeaderParam){
    this.apiService.deleteHeaderParam(param).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    })
  }

  addParam(){
    let param =  new APIHeaderParam();
    param.id.apiid = this.api.id.apiid;
    this.apiHeaderParams.push(param);
  }

  updateParam(param:APIHeaderParam){
    this.apiService.updateHeaderParam(param).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    });
  }

}
