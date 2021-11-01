import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FileExplorerService } from '../shared/services/file-explorer.service';

@Component({
  selector: 'app-search-templates',
  templateUrl: './search-templates.component.html',
  styleUrls: ['./search-templates.component.css']
})
export class SearchTemplatesComponent implements OnInit {

  @Input() template:any;
  @Output() templateId = new EventEmitter<string>();
  enablemodal:boolean = false;
  constructor(private fileExplorerService:FileExplorerService) { }

  ngOnInit(): void {
  }

  filterdata:any = [];
  searchpath = '';
  filterdataEnabled = false;
  filterSearch(path){
    this.filterdata = [];
    this.searchpath = path;
    this.fileExplorerService.getFilesByTypeAndSamplePath("2",path).subscribe((data)=>{
      if(data){
        this.filterdata = data;
      }
      this.filterdataEnabled = true;
    });
  }

  
  timeout: any = null;
  searchfilter(event){
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.filterSearch(event.target.value);
      }
    }, 1000);

  }

  @HostListener('document:click')clickout() {
    if(document.getElementById('search'))
    document.getElementById('search')['value'] = '';
    this.filterdataEnabled = false;
  }

  selectedTemplate(itemDetails){
    this.template['templateId'] = itemDetails[0].itemId;
    this.templateId.emit(this.template);
    this.enablemodal = false;

  }
}
