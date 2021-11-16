import { Injectable } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { Typeelement } from '../../model/typeelement.model';
import { AuthService } from './auth-service';
import { HttpCommonService } from './http-common.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  nativeComponents;
  refferedTemplates:any = [];
  constructor(
    private dataService:ParentDataService,
    private httpCommonService:HttpCommonService,
    private authService:AuthService
  ) { }

  refreshNativeComponents(){
    this.getNativeComponents().subscribe((data)=>{
      if(data){
        this.nativeComponents = data;
      }
    });
  }

  refreshRefferedTemplates(){
    this.getRefferedTemplates().subscribe((data)=>{
      if(data){
        this.refferedTemplates = data;
      }
    });
  }

  checkReferredTemplateIsOpen(templateId:string){
    let templateDetails = this.dataService.getActiveTabContent();
    let openedRefferedTemplates:any[] = templateDetails['openedRefferedTemplates'];
    if(openedRefferedTemplates && openedRefferedTemplates.indexOf(templateId['itemId']) >-1 ){
      return true;
    }
    return false;
  }

  openRefferedTemplate(templateId:string){
    let templateDetails = this.dataService.getActiveTabContent();
    let openedRefferedTemplates:any[] = templateDetails['openedRefferedTemplates'];
    if(!openedRefferedTemplates){
      this.dataService.getActiveTabContent()['openedRefferedTemplates'] = [];
      openedRefferedTemplates = [];
    }
    let templateIndex = openedRefferedTemplates.indexOf(templateId['itemId']);
    if(templateIndex == -1){
      this.dataService.getActiveTabContent()['openedRefferedTemplates'].push(templateId['itemId']);
    }else{
      this.closeRefferedTemplate(templateId);
    }
  }

  closeRefferedTemplate(templateId:string){
    let templateDetails = this.dataService.getActiveTabContent();
    let openedRefferedTemplates:any[] = templateDetails['openedRefferedTemplates'];
    if(!openedRefferedTemplates){
      this.dataService.getActiveTabContent()['openedRefferedTemplates'] = [];
      openedRefferedTemplates = [];
    }
    let templateIndex = openedRefferedTemplates.indexOf(templateId['itemId']);
    if(templateIndex != -1){
      this.dataService.getActiveTabContent()['openedRefferedTemplates'].splice(templateIndex,1);
    }
  }

  getNativeComponents(){
    let templateCode = this.getActiveTemplateCode();
    let url = this.getBasePath()+'/template/'+templateCode+'/nativecomponents';
    return this.httpCommonService.httpGet(url);
  }

  getRefferedTemplates(){
    let templateCode = this.getActiveTemplateCode();
    let url = this.getBasePath()+'/'+this.authService.activeProjectId+'/referredtemplates/'+templateCode;
    return this.httpCommonService.httpGet(url);
  }

  addRefferedTemplate(refferedTemplateId:string){
    if(this.checkTemplateExistsInRefferedTemplates(refferedTemplateId)) return;
    let templateId = this.getActiveTemplateCode();
    let url = this.getBasePath()+'/refferedtemplate';
    let body = {
      id:{
        templateId: templateId,
        refferedTemplateId : refferedTemplateId
      }
    }
    this.httpCommonService.httpPost(url, body).subscribe((data)=>{
      this.refreshRefferedTemplates();
    });
  }

  checkTemplateExistsInRefferedTemplates(templateId){
    let parenttemplateId = this.getActiveTemplateCode();
    if(parenttemplateId == templateId) return true;
    for(let i = 0;i<this.refferedTemplates.length;i++){
      let templateDetails = this.refferedTemplates[i];
      if(templateDetails['details']['id']['itemId'] == templateId){
        return true;
      }
    }
    return false;
  }

  addNewNativeComponent(type:string){
     this.addNewType(type).subscribe(()=>{
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
      typeName:this.getNativeComponentSampleName(type),
      type:type,
      desc:''
    }
    return this.httpCommonService.httpPost(url,body);
  }

  updateType(typeDetails){
    let url = this.getBasePath()+'/template/typesrep';
    return this.httpCommonService.httpPut(url,typeDetails);
  }

  getNativeComponentSampleName(type:string){
    switch(type){
      case 'ST':
        return 'New Simpletype';
      case 'CT':
        return 'New Complextype';
    }
  }

  getActiveTemplateCode(){
    return this.dataService.getActiveTabContent().id;
  }

  getBasePath(){
    return this.httpCommonService.baseurl;
  }

  stopPropagation(){
    event.stopPropagation();
  }

  getTyesByTypeNameAndType(typeName:string, type:string){
    let url:any = this.httpCommonService.baseurl+'/'+this.authService.activeProjectId+'/findByTypeNameAndType/'+type+'/'+typeName.toLocaleUpperCase();
    return this.httpCommonService.httpGet(url);
  }

  getTypeElements(typeId:string){
    let url:any = this.httpCommonService.baseurl+'/template/typeelements/'+typeId;
    return this.httpCommonService.httpGet(url);
  }

  updateTypeElements(typeId:string, typeElements:Typeelement[]){
    let url:any = this.httpCommonService.baseurl+'/template/typeelements/'+typeId;
    return this.httpCommonService.httpPut(url,typeElements);
  }

  updateTypeElement(typeId:string, typeElement:Typeelement){
    let url:any = this.httpCommonService.baseurl+'/template/typeelement/'+typeId;
    return this.httpCommonService.httpPut(url,typeElement);
  }
}
