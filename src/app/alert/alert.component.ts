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

}
