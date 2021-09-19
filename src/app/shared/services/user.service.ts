import { HttpCommonService } from './http-common.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpCommonservice:HttpCommonService) { }

  createUser(userDetails:any){
    let url:any = this.httpCommonservice.baseurl+'/user';
    this.httpCommonservice.httpPost(url,userDetails).subscribe(data=>{
      return data;
    });
  }

  getUserDetails(userDetails:any){
    let url:any = this.httpCommonservice.baseurl+'/user/'+userDetails.uid;
    this.httpCommonservice.httpGet(url).subscribe(data=>{
      return data;
    });
  }

}
