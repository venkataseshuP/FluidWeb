import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../shared/services/template.service';

@Component({
  selector: 'app-refferedcomponents',
  templateUrl: './refferedcomponents.component.html',
  styleUrls: ['./refferedcomponents.component.css']
})
export class RefferedcomponentsComponent implements OnInit {

  searchText = '';
  constructor(
    public templateService:TemplateService,
  ) { }

  ngOnInit(): void {
    this.templateService.refreshNativeComponents();
  }

}
