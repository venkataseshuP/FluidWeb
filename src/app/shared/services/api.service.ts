import { Injectable } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIPathParam } from '../../model/apipath-param.model';
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
  getAPIDetails(apiId){
    let url = this.httpCommonservice.baseurl+'/'+this.authservice.activeProjectId+'/api/'+this.dataService.getActiveTabContent().id+'/'+apiId;
    return this.httpCommonservice.httpGet(url);
  }

  getPathParams(apiId){
    let url = this.httpCommonservice.baseurl+'/'+this.authservice.activeProjectId+'/api/'+this.dataService.getActiveTabContent().id+'/'+apiId+'/pathparams';
    return this.httpCommonservice.httpGet(url);
  }

  deletePathParam(pathparam:APIPathParam){
    let url = this.httpCommonservice.baseurl+'/api/'+pathparam.id.apiid+'/pathparam/'+pathparam.id.paramId;
    return this.httpCommonservice.httpdelete(url);
  }

  updatePathParam(pathparam:APIPathParam){
    let url = this.httpCommonservice.baseurl+'/api/pathparam';
    return this.httpCommonservice.httpPut(url,pathparam);
  }

  createPathParam(api:APIRepo){
    let url = this.httpCommonservice.baseurl+'/api/pathparam';
    let apiPathParam:APIPathParam = new APIPathParam();
    apiPathParam.id.apiid = api.id.apiid;
    apiPathParam.paramName = 'new path param';
    return this.httpCommonservice.httpPost(url, apiPathParam);
  }

}
