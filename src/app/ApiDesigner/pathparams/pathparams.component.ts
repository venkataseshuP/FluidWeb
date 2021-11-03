import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIPathParam } from '../../model/apipath-param.model';
import { APIRepo } from '../../model/apirepo.model';
import { SearchSimpletypesComponent } from '../../search-simpletypes/search-simpletypes.component';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-pathparams',
  templateUrl: './pathparams.component.html',
  styleUrls: ['./pathparams.component.css']
})
export class PathparamsComponent implements OnInit {

  @ViewChild('simpletypeSearch') simpletypeSearch:SearchSimpletypesComponent;
  @Input() api:APIRepo;
  apiPathParams:APIPathParam[] = [];
  constructor(private apiService:ApiService, private dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.apiService.getPathParams(this.api.id.apiid).subscribe((pathParams:APIPathParam[])=>{
      if(pathParams){
        this.apiPathParams = pathParams;
      }
    })
  }

  deletePathParam(pathparam:APIPathParam){
    this.apiService.deletePathParam(pathparam).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    })
  }

  addPathParam(){
    // this.apiService.createPathParam(this.api).subscribe((data)=>{
    //   if(data){
    //     this.refresh();
    //   }
    // })
    let apipathParam =  new APIPathParam();
    apipathParam.id.apiid = this.api.id.apiid;
    this.apiPathParams.push(apipathParam);
  }

  updatePathParam(pathParams:APIPathParam){
    this.apiService.updatePathParam(pathParams).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    });
  }

  opensimpletypes(){
    this.simpletypeSearch.enablemodal = true;
  }

}
