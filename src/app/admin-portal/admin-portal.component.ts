import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  activeTabId = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
