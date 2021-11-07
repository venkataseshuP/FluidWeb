import { Component, OnInit, ViewChild } from '@angular/core';
import { Typesrepo } from '../../model/typesrepo.model';
import { TemplateService } from '../../shared/services/template.service';
import { ElementtreeTabsComponent } from '../elementtree-tabs/elementtree-tabs.component';

@Component({
  selector: 'app-elementtree',
  templateUrl: './elementtree.component.html',
  styleUrls: ['./elementtree.component.css']
})
export class ElementtreeComponent implements OnInit {

  @ViewChild('tabs') tabs:ElementtreeTabsComponent;
  constructor(
    public templateService:TemplateService,
  ) { }

  ngOnInit(): void {
    
  }

  opentab(typedata:Typesrepo){
    this.tabs.open(typedata);
  }

}
