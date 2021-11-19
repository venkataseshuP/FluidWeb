import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { TypesrepoPK } from '../../model/typesrepo-pk.model';
import { Typesrepo } from '../../model/typesrepo.model';
import { TemplateService } from '../../shared/services/template.service'; 

@Component({
  selector: 'app-nativecomponents',
  templateUrl: './nativecomponents.component.html',
  styleUrls: ['./nativecomponents.component.css']
})
export class NativecomponentsComponent implements OnInit {

  @Output() openTypeTab = new EventEmitter<Typesrepo>();
  @Output() typeChanged = new EventEmitter<any>();
  isSimpletypesOpen = true;
  isComplextypesOpen = true;
  isPrimitivtypesOpen = true;
  isRootOpen = true;
  searchText = '';
  editableTypeId = '';
  constructor(
    public templateService:TemplateService,
    public dataService:ParentDataService,
  ) { }

  ngOnInit(): void {
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
        this.typeChanged.emit();
      }
    });
  }

  refreshNativeComponents(){
    this.templateService.refreshNativeComponents();
  }

  activateEdit(nativeComponent){
    event.stopPropagation();
    this.editableTypeId=nativeComponent.id.typeId;
  }

  isTypeEditable(nativeComponent){
    return (this.editableTypeId == nativeComponent.id.typeId);
  }

  stoppropagation(){
    event.stopPropagation();
  }
  
  openTab(typedata:Typesrepo, hastab:boolean){
    event.stopPropagation();
    if(hastab){
      this.openTypeTab.emit(typedata);
    }
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

  makeAsRoot(nativetypeDetails){
    event.stopPropagation();
    this.templateService.updateRootElement(nativetypeDetails).subscribe((data)=>{
      if(data){
        this.refreshNativeComponents();
        this.typeChanged.emit();
      }
    });
  }

  deleteNativeComponent(nativetypeDetails:Typesrepo){
    event.stopPropagation();
    if(nativetypeDetails.roottype){
      let root = new Typesrepo();
      root.id = new TypesrepoPK();
      root.id.typeId = '';
      root.id.namespaceId = '';
      this.templateService.updateRootElement(root).subscribe((data)=>{
        if(data){
          this.refreshNativeComponents();
          this.typeChanged.emit();
        }
      });
    }
  }
  
}
