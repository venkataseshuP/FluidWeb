import { Component, Input, OnInit } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { APIRepo } from '../../model/apirepo.model';
import { APIResponseTemplate } from '../../model/apiresponse-template.model';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-response-templates',
  templateUrl: './response-templates.component.html',
  styleUrls: ['./response-templates.component.css']
})
export class ResponseTemplatesComponent implements OnInit {

  @Input() api:APIRepo;
  apiResponseTemplates:APIResponseTemplate[] = [];
  constructor(private apiService:ApiService, private dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.apiService.getResponseTemplates(this.api.id.apiid).subscribe((ResponseTemplates:APIResponseTemplate[])=>{
      if(ResponseTemplates){
        this.apiResponseTemplates = ResponseTemplates;
      }
    })
  }

  deleteResponseTemplate(ResponseTemplate:APIResponseTemplate){
    if(!ResponseTemplate.id.responseId){
      this.refresh();
    }
    this.apiService.deleteResponseTemplate(ResponseTemplate).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    })
  }

  addResponseTemplate(){
    let  ResponseTemplate =  new APIResponseTemplate();
    ResponseTemplate.id.apiid = this.api.id.apiid;
    this.apiResponseTemplates.push(ResponseTemplate);
  }

  updateResponseTemplate(ResponseTemplate:APIResponseTemplate){
    this.apiService.updateResponseTemplate(ResponseTemplate).subscribe((data)=>{
      if(data){
        this.refresh();
      }
    });
  }
}
