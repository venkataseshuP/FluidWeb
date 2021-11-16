import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TypeElement } from 'typescript';
import { ParentDataService } from '../../dataService';
import { Typeelement } from '../../model/typeelement.model';
import { Typesrepo } from '../../model/typesrepo.model';
import { AlertService } from '../../shared/services/alert.service';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-elementtree-tabdata',
  templateUrl: './elementtree-tabdata.component.html',
  styleUrls: ['./elementtree-tabdata.component.css']
})
export class ElementtreeTabdataComponent implements OnInit {

  constructor(private dataService: ParentDataService, private templateService:TemplateService,
    private alertService:AlertService) { }
  templateId = '';
  typeElements:Typesrepo;
  ngOnInit(): void {
  }

  refreshTypeelements(){
    let activeelementTabId = this.getActiveTabContent()['activeTabId'];
    let typeId = this.getTabs()[activeelementTabId].id;
    this.templateService.getTypeElements(typeId).subscribe((data:Typesrepo)=>{
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

  dragStart(element:any){
    this.dataService.getActiveTabContent()['dragcontent'] = element;
  }

  dragEnd(event){
    this.dataService.getActiveTabContent()['dragcontent']  = undefined;
  }

  dragOver(event){
    event.preventDefault();
  }

  dragDrop(index:number){
    let typerepo:Typesrepo = this.dataService.getActiveTabContent()['dragcontent'];    
    let typeelement = new Typeelement();
    typeelement.elementName = typerepo.typeName;
    typeelement.elementTypeId = typerepo.id.typeId;
    typeelement.minOccurs = 0;
    typeelement.maxOccurs = 1;
    typeelement.typesrepo = typerepo;
    typeelement.id.typeId = this.typeElements.id.typeId;
    typeelement.id.namespaceId = this.typeElements.id.namespaceId;
    this.typeElements.typeelements.splice(index+1,0,typeelement);
    this.updateSlNo();
    this.templateService.updateTypeElements(this.typeElements.id.typeId, this.typeElements.typeelements).subscribe(data=>{
      if(data){
        this.refreshTypeelements();
      }
    });

  }
  updateSlNo(){
    let index = 1;
    this.typeElements.typeelements.forEach(element=>{
      element.id.slNo = index++;
    });
  }

  updateTypeElement(typeelement:Typeelement){
    this.templateService.updateTypeElement(this.typeElements.id.typeId,typeelement).subscribe(data=>{
      if(data){
        this.refreshTypeelements();
      }
    });
  }
}
