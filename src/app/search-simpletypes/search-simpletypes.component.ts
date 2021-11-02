import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FileExplorerService } from '../shared/services/file-explorer.service';
import { TemplateService } from '../shared/services/template.service';

@Component({
  selector: 'app-search-simpletypes',
  templateUrl: './search-simpletypes.component.html',
  styleUrls: ['./search-simpletypes.component.css']
})
export class SearchSimpletypesComponent implements OnInit {

  @Input() param:any;
  @Output() typeId = new EventEmitter<string>();
  enablemodal:boolean = false;
  constructor(private fileExplorerService:FileExplorerService, private templateService:TemplateService) { }

  ngOnInit(): void {
  }

  filterdata:any = [];
  searchpath = '';
  filterdataEnabled = false;
  filterSearch(path){
    this.filterdata = [];
    this.searchpath = path;
    this.templateService.getTyesByTypeNameAndType(path, "ST").subscribe((data)=>{
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
    this.param['paramType'] = itemDetails.id.typeId;
    this.param['templateId'] = itemDetails.templateId;
    this.typeId.emit(this.param);
    this.enablemodal = false;

  }

}
