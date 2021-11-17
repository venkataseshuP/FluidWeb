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
  openElements = [];
  ngOnInit(): void {
  }

  refreshTypeelements(){
    this.openElements = [];
    this.templateId = '';
    let activeelementTabId = this.getActiveTabContent()['activeTabId'];
    let typeId = this.getTabs()[activeelementTabId].id;
    this.templateService.getTypeElements(typeId).subscribe((data:Typesrepo)=>{
      if(data){
        this.typeElements = data;
        this.templateId = this.typeElements['templateId'];
        this.openElements = this.getActiveTabContent()['openElements'];
        if(!this.openElements){
          this.openElements = [];
        }
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

  dragDrop(index:number, level:number){
    event.stopPropagation();
    if(level != 1) return;
    let typerepo:any = this.dataService.getActiveTabContent()['dragcontent'];
    if(typerepo.type){  
      if(this.typeElements.id.typeId == typerepo.id.typeId) return ; 
      let typeelement = new Typeelement();
      typeelement.elementName = typerepo.typeName;
      typeelement.elementTypeId = typerepo.id.typeId;
      typeelement.minOccurs = 0;
      typeelement.maxOccurs = 1;
      typeelement.typesrepo = typerepo;
      typeelement.id.typeId = this.typeElements.id.typeId;
      typeelement.id.namespaceId = this.typeElements.id.namespaceId;
      if(index == -1){
        index = this.typeElements.typeelements.length;
      }
      this.typeElements.typeelements.splice(index+1,0,typeelement);
    }else if(!typerepo.type){
      let tempindex = typerepo.id['slNo'];
      this.typeElements.typeelements.splice(index,0,typerepo);
      this.typeElements.typeelements.splice(tempindex,1);
    }
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

  openOrCloseElement(path:string){
    event.stopPropagation();
    let index = this.openElements.indexOf(path);
    if(index>-1){
      this.openElements.splice(index,1);
    }else{
      this.openElements.push(path);
    }
  }
}
