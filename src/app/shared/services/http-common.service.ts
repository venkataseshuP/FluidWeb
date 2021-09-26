import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParentDataService } from 'src/app/dataService';

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
    return this.http.get(url);
  }

  httpPost(url:string, body:any){
    return this.http.post(url,body);
  }

  httpPut(url:string, body:any){
    return this.http.put(url,body);
  }

  httpdelete(url:string){
    return this.http.delete(url);
  }

}