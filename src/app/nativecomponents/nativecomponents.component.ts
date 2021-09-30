import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../shared/services/template.service'; 

@Component({
  selector: 'app-nativecomponents',
  templateUrl: './nativecomponents.component.html',
  styleUrls: ['./nativecomponents.component.css']
})
export class NativecomponentsComponent implements OnInit {

  constructor(
    public templateService:TemplateService,
  ) { }

  ngOnInit(): void {
    this.templateService.refreshNativeComponents();
  }

}
