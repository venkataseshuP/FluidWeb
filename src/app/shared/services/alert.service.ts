import { Injectable } from '@angular/core';
import { ParentDataService } from '../../dataService';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dataService:ParentDataService) { }

  showAlert(type,msg){
    this.dataService.alertmsg = msg;
    this.dataService.alerttype = type;
    this.dataService.alert = true;
    setTimeout(()=>{
      this.dataService.alert = false;
    },5000)
  }
}
