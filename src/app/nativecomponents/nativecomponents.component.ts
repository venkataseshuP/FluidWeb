import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../shared/services/template.service'; 

@Component({
  selector: 'app-nativecomponents',
  templateUrl: './nativecomponents.component.html',
  styleUrls: ['./nativecomponents.component.css']
})
export class NativecomponentsComponent implements OnInit {

  isSimpletypesOpen = true;
  isComplextypesOpen = true;
  searchText = '';
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

  changeTypeName(typeDetails,newTypeName){
    if(typeDetails.typeName == newTypeName)return;
    typeDetails.typeName = newTypeName;
    this.templateService.updateType(typeDetails).subscribe((data)=>{
      if(data)
        this.refreshNativeComponents;
    });
  }

  refreshNativeComponents(){
    this.templateService.refreshNativeComponents();
  }

  
}
