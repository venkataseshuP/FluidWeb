import { Component, OnInit } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-elementtree-tabdata',
  templateUrl: './elementtree-tabdata.component.html',
  styleUrls: ['./elementtree-tabdata.component.css']
})
export class ElementtreeTabdataComponent implements OnInit {

  constructor(private dataService: ParentDataService, private templateService:TemplateService) { }
  templateId = '';
  typeElements:any = [];
  ngOnInit(): void {
  }

  refreshTypeelements(){
    let activeelementTabId = this.getActiveTabContent()['activeTabId'];
    let typeId = this.getTabs()[activeelementTabId].id;
    this.templateService.getTypeElements(typeId).subscribe((data)=>{
      if(data){
        this.typeElements = data;
        this.templateId = this.typeElements['templateId'];
      }
    });
  }

  getActiveTabContent() {
    return this.dataService.getActiveTabContent();
  }

  getTabs() {
    let tabs = this.getActiveTabContent()['tabs'];
    if (!tabs) {
      this.getActiveTabContent()['tabs'] = [];
    }
    return this.getActiveTabContent()['tabs'];
  }

  getActiveTabId() {
    return this.dataService.getActiveTabContent()['activeTabId'];
  }

}
