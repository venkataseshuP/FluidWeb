import { Component, Input, OnInit } from '@angular/core';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-reffered-template',
  templateUrl: './reffered-template.component.html',
  styleUrls: ['./reffered-template.component.css']
})
export class RefferedTemplateComponent implements OnInit {

  @Input() template:any;
  isSimpletypesOpen = true;
  isComplextypesOpen = true;
  searchText = '';
  editableTypeId = '';
  constructor(public templateService:TemplateService) { }

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

}
