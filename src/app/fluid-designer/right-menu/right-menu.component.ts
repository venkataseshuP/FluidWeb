import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ParentDataService } from '../../dataService';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  @Input() elementdata;
  constructor(public dataService: ParentDataService) {
  }

  ngOnInit(): void {
  }

  menuactivate = false;

 

  delete() {
    let active_tab_data = this.dataService.tabs[this.dataService.activeTabId];
    let active_element = active_tab_data['activeelement'];
    this.dataService.tabs[this.dataService.activeTabId]['activeelement'] = -1;
    this.dataService.tabs[this.dataService.activeTabId]['elements'].splice(active_element,1);
  }

  activateSave(){
    this.dataService.tabs[this.dataService.activeTabId]['save'] = true;
  }

  refresh(elementdata){
    this.elementdata = elementdata;
  }
}
