import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParentDataService } from '../../dataService';

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {
  baseurl = 'http://localhost:8080';
  constructor(private http:HttpClient, private dataService:ParentDataService) { }

  load(){
    this.dataService.load = true;
  }

  stopload():void{
     this.dataService.load = false;
  }

  httpGet(url:string){
    return this.http.get(url,{headers:{
      'tenantId':this.dataService.activeProjectId
    }});
  }

  httpPost(url:string, body:any){
    return this.http.post(url,body,{headers:{
      'tenantId':this.dataService.activeProjectId
    }});
  }

  httpPut(url:string, body:any){
    return this.http.put(url,body,{headers:{
      'tenantId':this.dataService.activeProjectId
    }});
  }

  httpdelete(url:string){
    return this.http.delete(url,{headers:{
      'tenantId':this.dataService.activeProjectId
    }});
  }

}