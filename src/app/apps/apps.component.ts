import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tab } from '../model/tab.model';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  @Output() openTab = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    
  }

  open(tabtype:string){
    let tabdetails  = new Tab();
    switch(tabtype){
      case "home":{
        tabdetails.id.itemId = 'FE_0000001';
        tabdetails.name = 'Home';
        tabdetails.path = '/Home';
        tabdetails.type = '1';
        tabdetails.desc = 'Home';
      }
    }
    this.openTab.emit(tabdetails);
  }

}
