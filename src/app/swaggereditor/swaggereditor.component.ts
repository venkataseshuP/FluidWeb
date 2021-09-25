import { Component, OnInit } from '@angular/core';
import { ParentDataService } from '../dataService';
import { FileExplorerService } from '../shared/services/file-explorer.service';
declare const SwaggerEditorBundle: any;
declare const SwaggerEditorStandalonePreset: any;
@Component({
  selector: 'app-swaggereditor',
  templateUrl: './swaggereditor.component.html',
  styleUrls: ['./swaggereditor.component.css']
})
export class SwaggereditorComponent implements OnInit {

  constructor(private dataService:ParentDataService, private fileService:FileExplorerService
    ) { }

  editor: any;

  ngOnInit(): void {
    this.editor = SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerEditorStandalonePreset
      ],
    });

    this.loadEdiorSwaggerSpec();
  }

  async loadEdiorSwaggerSpec(){
    let specDetails = this.dataService.getActiveTabContent();
    if(!specDetails['spec']){
      await this.loadSWaggerSpec();
    }
    this.editor.specActions.updateSpec(specDetails['spec']);
  }

  async loadSWaggerSpec() {
    this.fileService.getSpecDetails(this.dataService.getActiveTabContent().id).subscribe(data=>{
      let specDetails = '';
      if(data){
        this.editor.specActions.updateSpec(data['spec']);        
      }
      this.dataService.getActiveTabContent()['spec'] = specDetails;
    });
  }

  saveSwaggerSpec(){
      this.fileService.saveSwaggerSpec(this.editor.specSelectors.specStr(), this.dataService.getActiveTabContent().id)
      .subscribe(data=>{
        if(data){

        }
      });
  }

  downloadSwaggerSpec(){
    
  }


}
