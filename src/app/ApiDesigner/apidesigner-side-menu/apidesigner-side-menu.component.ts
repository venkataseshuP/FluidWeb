import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-apidesigner-side-menu',
  templateUrl: './apidesigner-side-menu.component.html',
  styleUrls: ['./apidesigner-side-menu.component.css']
})
export class ApidesignerSideMenuComponent implements OnInit {

  constructor(public apiService:ApiService) { }
  searchText = '';
  ngOnInit(): void {
  }

}
