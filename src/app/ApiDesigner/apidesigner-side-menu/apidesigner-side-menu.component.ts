import { Component, OnInit } from '@angular/core';
import { APIRepo } from '../../model/apirepo.model';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-apidesigner-side-menu',
  templateUrl: './apidesigner-side-menu.component.html',
  styleUrls: ['./apidesigner-side-menu.component.css']
})
export class ApidesignerSideMenuComponent implements OnInit {

  editableapi = '';
  constructor(public apiService:ApiService) { }
  searchText = '';
  ngOnInit(): void {
  }

  activateEdit(apidata:APIRepo){
    this.editableapi=apidata.id.apiid;
    this.stopPropagation();
  }

  isAPIEditable(apidata:APIRepo){
    return (this.editableapi == apidata.id.apiid);
  }

  updateAPI(apidata:APIRepo){
    this.stopPropagation();
    this.apiService.updateAPI(apidata).subscribe((data)=>{
      if(data){
        this.apiService.refreshAPIs();
        this.editableapi = '';
      }
    });
  }

  stopPropagation(){
    event.stopPropagation();
  }

}
