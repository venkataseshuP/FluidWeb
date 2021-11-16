import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
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
    let options = {};
    let headers =  new HttpHeaders();
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    options['headers'] = headers;
    return this.http.put(url,body,options);
  }

  httpdelete(url:string){
    let options = {};
    let headers =  new HttpHeaders();
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    options['headers'] = headers;
    return this.http.delete(url,options);
  }

}