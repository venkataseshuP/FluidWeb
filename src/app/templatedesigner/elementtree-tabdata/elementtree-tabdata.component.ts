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

  constructor(private dataService: ParentDataService, private templateService: TemplateService,
    private alertService: AlertService) { }
  templateId = '';
  typeElements: Typesrepo;
  openElements = [];
  ngOnInit(): void {
  }

  refreshTypeelements() {
    this.openElements = [];
    this.templateId = '';
    let activeelementTabId = this.getActiveTabContent()['activeTabId'];
      let typeId = this.getTabs()[activeelementTabId].id;
      this.templateService.getTypeElements(typeId).subscribe((data: Typesrepo) => {
        if (data) {
          this.updateTypeTabData(data);
          this.typeElements = data;
          this.templateId = this.typeElements['templateId'];
          this.openElements = this.getActiveTabContent()['openElements'];
          if (!this.openElements) {
            this.openElements = [];
          }
        }
      });
  }

  updateTypeTabData(typesrep: Typesrepo) {
    let activeelementTabId = this.getActiveTabContent()['activeTabId'];
    let acivetabdata = this.getTabs()[activeelementTabId];
    this.getTabs()[activeelementTabId]['desc'] = typesrep.typeName;
    this.getTabs()[activeelementTabId]['type'] = typesrep.type;
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

  dragStart(element: any) {
    this.dataService.getActiveTabContent()['dragcontent'] = element;
  }

  dragEnd(event) {
    this.dataService.getActiveTabContent()['dragcontent'] = undefined;
  }

  dragOver(event) {
    event.preventDefault();
  }

  dragDrop(index: number, level: number) {
    event.stopPropagation();
    if (level != 1) return;
    let typerepo: any = this.dataService.getActiveTabContent()['dragcontent'];
    if (typerepo.type) {
      if (this.typeElements.id.typeId == typerepo.id.typeId) return;
      let typeelement = new Typeelement();
      typeelement.elementName = this.transform(typerepo.typeName);
      typeelement.elementTypeId = typerepo.id.typeId;
      typeelement.minOccurs = 0;
      typeelement.maxOccurs = 1;
      typeelement.typesrepo = typerepo;
      typeelement.id.typeId = this.typeElements.id.typeId;
      typeelement.id.namespaceId = this.typeElements.id.namespaceId;
      if (index == -1) {
        index = this.typeElements.typeelements.length;
      }
      this.typeElements.typeelements.splice(index + 1, 0, typeelement);
    } else if (!typerepo.type && index != -1) {
      let tempindex = typerepo.id['slNo'];
      if (+tempindex > index) {
        this.typeElements.typeelements.splice(index, 0, typerepo);
        this.typeElements.typeelements.splice(tempindex, 1);
      } else {
        this.typeElements.typeelements.splice(index + 1, 0, typerepo);
        this.typeElements.typeelements.splice(+tempindex - 1, 1);
      }
    }
    this.updateSlNo();
    this.templateService.updateTypeElements(this.typeElements.id.typeId, this.typeElements.typeelements).subscribe(data => {
      if (data) {
        this.refreshTypeelements();
      }
    });

  }
  updateSlNo() {
    let index = 1;
    this.typeElements.typeelements.forEach(element => {
      element.id.slNo = index++;
    });
  }

  updateTypeElement(typeelement: Typeelement) {
    this.templateService.updateTypeElement(this.typeElements.id.typeId, typeelement).subscribe(data => {
      if (data) {
        this.refreshTypeelements();
      }
    });
  }

  openOrCloseElement(path: string) {
    event.stopPropagation();
    let index = this.openElements.indexOf(path);
    if (index > -1) {
      this.openElements.splice(index, 1);
    } else {
      this.openElements.push(path);
    }
    this.getActiveTabContent()['openElements'] = this.openElements;
  }

  deleteElement(index) {
    this.typeElements.typeelements.splice(index, 1);
    this.templateService.updateTypeElements(this.typeElements.id.typeId, this.typeElements.typeelements).subscribe(data => {
      if (data) {
        this.refreshTypeelements();
      }
    });
  }

  transform(value: string): string {
    let first = value.substr(0, 1).toLowerCase();
    return first + value.substr(1);
  }

}
