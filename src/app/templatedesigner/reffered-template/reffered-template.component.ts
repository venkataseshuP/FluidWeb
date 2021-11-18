import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-reffered-template',
  templateUrl: './reffered-template.component.html',
  styleUrls: ['./reffered-template.component.css']
})
export class RefferedTemplateComponent implements OnInit {

  @Input() template:any;
  @Output() openTemplateTab = new EventEmitter<any>();
  isSimpletypesOpen = true;
  isComplextypesOpen = true;
  searchText = '';
  editableTypeId = '';
  constructor(public templateService:TemplateService, private dataService:ParentDataService) { }

  ngOnInit(): void {
  }

  
  openORcloseST(){
   
    this.isSimpletypesOpen = !this.isSimpletypesOpen;
  }

  openORcloseCT(){
    this.isComplextypesOpen = !this.isComplextypesOpen;
  }

  isTypeEditable(nativeComponent){
    return (this.editableTypeId == nativeComponent.id.typeId);
  }

  dragStart(nativeComponent:any){
    this.dataService.getActiveTabContent()['dragcontent'] = nativeComponent;
  }

  dragEnd(event){
    this.dataService.getActiveTabContent()['dragcontent']  = undefined;
  }

  dragOver(event){
    event.preventDefault();
  }

  openTemplate(templateDetails){
    this.openTemplateTab.emit(templateDetails['details']);
  }

  deleterefferedTemplate(refferedTemplateDetails){
    event.stopPropagation();
    this.templateService.deleteRefferedTemplate(refferedTemplateDetails).subscribe(()=>{
      this.templateService.refreshRefferedTemplates();
    });
  }

}
