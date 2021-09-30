import { Injectable } from '@angular/core';
import { ParentDataService } from 'src/app/dataService';
import { HttpCommonService } from './http-common.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  nativeComponents;
  constructor(
    private dataService:ParentDataService,
    private httpCommonService:HttpCommonService
  ) { }

  refreshNativeComponents(){
    this.getNativeComponents().subscribe((data)=>{
      if(data){
        this.nativeComponents = data;
      }
    });
  }

  getNativeComponents(){
    let templateCode = this.getActiveTemplateCode();
    let url = this.getBasePath()+'/template/'+templateCode+'/nativecomponents';
    return this.httpCommonService.httpGet(url);
  }

  addNewComplextype(){
     this.addNewType('CT').subscribe(()=>{
       this.refreshNativeComponents();
     });
  }

  addNewType(type:string){
    let templateId = this.getActiveTemplateCode();
    let url = this.getBasePath()+'/template/typesrep';
    let body = {
      id:{
        typeId:'',
        namespaceId:'N_0001',
      },
      templateId:templateId,
      typeName:'New Complextype',
      type:'CT',
      desc:''
    }
    return this.httpCommonService.httpPost(url,body);
  }

  getActiveTemplateCode(){
    return this.dataService.getActiveTabContent().id;
  }

  getBasePath(){
    return this.httpCommonService.baseurl;
  }
}
