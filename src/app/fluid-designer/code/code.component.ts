import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ParentDataService } from '../../dataService';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {



  public   options: any = {
    printMargin: false,
    showLineNumbers: false,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    showGutter: false,
    foldStyle: "markbegin",
    enableBasicAutocompletion: true,
  };
  
  constructor(public dataService: ParentDataService) {
  }

  ngOnInit(): void {
  }

}
