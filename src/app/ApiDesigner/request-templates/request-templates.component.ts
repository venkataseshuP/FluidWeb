import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIRepo } from '../../model/apirepo.model';
import { APIRequestTemplate } from '../../model/apirequest-template.model';
import { ApiService } from '../../shared/services/api.service';
import { FileExplorerService } from '../../shared/services/file-explorer.service';

@Component({
  selector: 'app-request-templates',
  templateUrl: './request-templates.component.html',
  styleUrls: ['./request-templates.component.css']
})
export class RequestTemplatesComponent implements OnInit {

  @Input() api:APIRepo;
  apiRequestTemplates:APIRequestTemplate[] = [];
  constructor(private apiService:ApiService, private dataService:ParentDataService,
    private fileExplorerService:FileExplorerService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.apiService.getRequestTemplates(this.api.id.apiid).subscribe((requestTemplates:APIRequestTemplate[])=>{
      if(requestTemplates){
        this.apiRequestTemplates = requestTemplates;
      }
    })
  }

  deleteRequestTemplate(requestTemplate:APIRequestTemplate){
    this.apiService.deleteRequestTemplate(requestTemplate).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    })
  }

  addRequestTemplate(){
    let  requestTemplate =  new APIRequestTemplate();
    requestTemplate.id.apiid = this.api.id.apiid;
    this.apiRequestTemplates.push(requestTemplate);
  }

  updateRequestTemplate(requestTemplate:APIRequestTemplate){
    this.apiService.updateRequestTemplate(requestTemplate).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    });
  }

  
}
