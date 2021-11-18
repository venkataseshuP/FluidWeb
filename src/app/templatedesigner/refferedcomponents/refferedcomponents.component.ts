import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FileExplorerService } from '../../shared/services/file-explorer.service';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-refferedcomponents',
  templateUrl: './refferedcomponents.component.html',
  styleUrls: ['./refferedcomponents.component.css']
})
export class RefferedcomponentsComponent implements OnInit {

  @Output() openTemplateTab =  new EventEmitter<any>();
  constructor(
    public templateService:TemplateService,
    public fileExplorerService:FileExplorerService
  ) { }

  ngOnInit(): void {
    this.templateService.refreshRefferedTemplates();
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
    document.getElementById('search')['value'] = '';
    this.filterdataEnabled = false;
  }

  addRefferedTemplate(refferedtemplateDetails){
    let refferedtemplateId = refferedtemplateDetails[0].itemId;
    this.templateService.addRefferedTemplate(refferedtemplateId);
    this.filterdataEnabled = false;
  }

  refreshRefferedComponents(){
    this.templateService.refreshRefferedTemplates();
  }

  openTemplate(templateDetails){
    this.openTemplateTab.emit(templateDetails);
  }

}
