import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {
  baseurl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

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
