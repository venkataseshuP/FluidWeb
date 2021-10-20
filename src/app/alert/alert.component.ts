import { Component, OnInit } from '@angular/core';
import { ParentDataService } from '../dataService';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  closeAlert(){
    this.dataService.alertmsg = '';
    this.dataService.alerttype = 0;
    this.dataService.alert = false;
  }

}
