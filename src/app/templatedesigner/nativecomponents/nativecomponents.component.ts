import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../shared/services/template.service'; 

@Component({
  selector: 'app-nativecomponents',
  templateUrl: './nativecomponents.component.html',
  styleUrls: ['./nativecomponents.component.css']
})
export class NativecomponentsComponent implements OnInit {

  isSimpletypesOpen = true;
  isComplextypesOpen = true;
  isPrimitivtypesOpen = true;
  isRootOpen = true;
  searchText = '';
  editableTypeId = '';
  constructor(
    public templateService:TemplateService,
  ) { }

  ngOnInit(): void {
    this.refreshNativeComponents();
  }

  openORcloseST(){
   
    this.isSimpletypesOpen = !this.isSimpletypesOpen;
  }

  openORcloseCT(){
    this.isComplextypesOpen = !this.isComplextypesOpen;
  }

  openORclosePT(){
    this.isPrimitivtypesOpen = !this.isPrimitivtypesOpen;
  }

  openORcloseR(){
    this.isRootOpen = !this.isRootOpen;
  }

  changeTypeName(typeDetails,newTypeName){
    if(!newTypeName || newTypeName == ''){
      document.getElementById(typeDetails.typeName)['value'] = typeDetails.typeName;      
      return ;
    }
    if(typeDetails.typeName == newTypeName)return;
    typeDetails.typeName = newTypeName;
    this.templateService.updateType(typeDetails).subscribe((data)=>{
      if(data){
        this.editableTypeId = '';
        this.refreshNativeComponents();
      }
    });
  }

  refreshNativeComponents(){
    this.templateService.refreshNativeComponents();
  }

  activateEdit(nativeComponent){
    this.editableTypeId=nativeComponent.id.typeId;
    this.templateService.stopPropagation();
  }

  isTypeEditable(nativeComponent){
    return (this.editableTypeId == nativeComponent.id.typeId);
  }
  
}
