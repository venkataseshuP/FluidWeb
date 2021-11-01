import { Injectable } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIHeaderParam } from '../../model/apiheader-param.model';
import { APIPathParam } from '../../model/apipath-param.model';
import { APIQueryParam } from '../../model/apiquery-param.model';
import { APIRepoPK } from '../../model/apirepo-pk.model';
import { APIRepo } from '../../model/apirepo.model';
import { APIRequestTemplate } from '../../model/apirequest-template.model';
import { APIResponseTemplate } from '../../model/apiresponse-template.model';
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

  // ------------------ query params ---------------------------------

  getQueryParams(apiId){
    let url = this.httpCommonservice.baseurl+'/'+this.authservice.activeProjectId+'/api/'+this.dataService.getActiveTabContent().id+'/'+apiId+'/queryparams';
    return this.httpCommonservice.httpGet(url);
  }

  deleteQueryParam(queryparam:APIQueryParam){
    let url = this.httpCommonservice.baseurl+'/api/'+queryparam.id.apiid+'/queryparam/'+queryparam.id.paramId;
    return this.httpCommonservice.httpdelete(url);
  }

  updateQueryParam(queryparam:APIQueryParam){
    let url = this.httpCommonservice.baseurl+'/api/queryparam';
    return this.httpCommonservice.httpPut(url,queryparam);
  }

  createQueryParam(api:APIRepo){
    let url = this.httpCommonservice.baseurl+'/api/queryparam';
    let queryparam:APIQueryParam = new APIQueryParam();
    queryparam.id.apiid = api.id.apiid;
    queryparam.paramName = 'new query param';
    return this.httpCommonservice.httpPost(url, queryparam);
  }

  // ------------------ header params ---------------------------------

  getHeaderParams(apiId){
    let url = this.httpCommonservice.baseurl+'/'+this.authservice.activeProjectId+'/api/'+this.dataService.getActiveTabContent().id+'/'+apiId+'/headerparams';
    return this.httpCommonservice.httpGet(url);
  }

  deleteHeaderParam(param:APIHeaderParam){
    let url = this.httpCommonservice.baseurl+'/api/'+param.id.apiid+'/headerparam/'+param.id.paramId;
    return this.httpCommonservice.httpdelete(url);
  }

  updateHeaderParam(param:APIHeaderParam){
    let url = this.httpCommonservice.baseurl+'/api/headerparam';
    return this.httpCommonservice.httpPut(url,param);
  }

  createHeaderParam(api:APIRepo){
    let url = this.httpCommonservice.baseurl+'/api/headerparam';
    let queryparam:APIQueryParam = new APIQueryParam();
    queryparam.id.apiid = api.id.apiid;
    queryparam.paramName = 'new header param';
    return this.httpCommonservice.httpPost(url, queryparam);
  }  


    // ------------------ Request Templates ---------------------------------

    getRequestTemplates(apiId){
      let url = this.httpCommonservice.baseurl+'/'+this.authservice.activeProjectId+'/api/'+this.dataService.getActiveTabContent().id+'/'+apiId+'/requesttemplates';
      return this.httpCommonservice.httpGet(url);
    }
  
    deleteRequestTemplate(requestTemplate:APIRequestTemplate){
      let url = this.httpCommonservice.baseurl+'/api/'+requestTemplate.id.apiid+'/requesttemplate/'+requestTemplate.id.requestId;
      return this.httpCommonservice.httpdelete(url);
    }
  
    updateRequestTemplate(requestTemplate:APIRequestTemplate){
      let url = this.httpCommonservice.baseurl+'/api/requesttemplate';
      return this.httpCommonservice.httpPut(url,requestTemplate);
    }
  
    createRequestTemplate(api:APIRepo){
      let url = this.httpCommonservice.baseurl+'/api/requesttemplate';
      let reuqestTemplate:APIRequestTemplate = new APIRequestTemplate();
      reuqestTemplate.id.apiid = api.id.apiid;
      return this.httpCommonservice.httpPost(url, reuqestTemplate);
    } 

        // ------------------ Response Templates ---------------------------------

        getResponseTemplates(apiId){
          let url = this.httpCommonservice.baseurl+'/'+this.authservice.activeProjectId+'/api/'+this.dataService.getActiveTabContent().id+'/'+apiId+'/responsetemplates';
          return this.httpCommonservice.httpGet(url);
        }
      
        deleteResponseTemplate(ResponseTemplate:APIResponseTemplate){
          let url = this.httpCommonservice.baseurl+'/api/'+ResponseTemplate.id.apiid+'/responsetemplate/'+ResponseTemplate.id.responseId;
          return this.httpCommonservice.httpdelete(url);
        }
      
        updateResponseTemplate(ResponseTemplate:APIResponseTemplate){
          let url = this.httpCommonservice.baseurl+'/api/responsetemplate';
          return this.httpCommonservice.httpPut(url,ResponseTemplate);
        }
      
        createResponseTemplate(api:APIRepo){
          let url = this.httpCommonservice.baseurl+'/api/responsetemplate';
          let reuqestTemplate:APIResponseTemplate = new APIResponseTemplate();
          reuqestTemplate.id.apiid = api.id.apiid;
          return this.httpCommonservice.httpPost(url, reuqestTemplate);
        } 

}
