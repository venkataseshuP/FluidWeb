import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../shared/services/template.service';

@Component({
  selector: 'app-elementtree',
  templateUrl: './elementtree.component.html',
  styleUrls: ['./elementtree.component.css']
})
export class ElementtreeComponent implements OnInit {

  constructor(
    public templateService:TemplateService,
  ) { }

  ngOnInit(): void {
    
  }

}
