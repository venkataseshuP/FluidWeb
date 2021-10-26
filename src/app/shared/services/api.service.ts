import { Injectable } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIRepoPK } from '../../model/apirepo-pk.model';
import { APIRepo } from '../../model/apirepo.model';
import { AuthService } from './auth-service';
import { HttpCommonService } from './http-common.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apislist:APIRepo[]  = [];
  constructor(private authservice:AuthService, 
    private dataService:ParentDataService,
    private httpCommonservice:HttpCommonService) { }

  createAPI(method:string){
    let apidetails =  new APIRepo();
    apidetails.id = new APIRepoPK();
    apidetails.endpointId = 'E0001';
    apidetails.method = method;
    apidetails.id.apidocId = this.dataService.getActiveTabContent().id;
    apidetails.id.pid = this.authservice.activeProjectId;
    apidetails.url = '/api/url/here';
    apidetails.desc = '';
    apidetails.apiName = 'API name here';
    apidetails.type = 'P';

    let url:any = this.httpCommonservice.baseurl+'/api';
    return this.httpCommonservice.httpPost(url,apidetails);

  }

  refreshAPIs(){
    let url:any = this.httpCommonservice.baseurl+'/'+this.authservice.activeProjectId+'/apis/'+this.dataService.getActiveTabContent().id;
    this.httpCommonservice.httpGet(url).subscribe((data:APIRepo[])=>{
      if(data){
        this.apislist = data;
      }
    })
  }

  updateAPI(apiData:APIRepo){
    let url = this.httpCommonservice.baseurl+'/api';
    return this.httpCommonservice.httpPut(url,apiData);
  }

}
