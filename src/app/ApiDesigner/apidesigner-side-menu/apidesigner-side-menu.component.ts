import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { APIRepo } from '../../model/apirepo.model';
import { AlertService } from '../../shared/services/alert.service';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-apidesigner-side-menu',
  templateUrl: './apidesigner-side-menu.component.html',
  styleUrls: ['./apidesigner-side-menu.component.css']
})
export class ApidesignerSideMenuComponent implements OnInit {

  @Output() openTab = new EventEmitter<APIRepo>();
  editableapi = '';
  constructor(public apiService:ApiService, private alertService:AlertService) { }
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
        this.alertService.showAlert(1,'successfully updated api');
      }
    });
  }

  stopPropagation(){
    event.stopPropagation();
  }

  @HostListener('document:click')clickout() {
    event.stopPropagation();
    this.editableapi = '';
  }

  openAPI(api:APIRepo){
    this.openTab.emit(api);
  }

}
