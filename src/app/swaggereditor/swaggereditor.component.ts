import { Component, OnInit } from '@angular/core';
declare const SwaggerEditorBundle: any;
declare const SwaggerEditorStandalonePreset: any;
@Component({
  selector: 'app-swaggereditor',
  templateUrl: './swaggereditor.component.html',
  styleUrls: ['./swaggereditor.component.css']
})
export class SwaggereditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const editor = SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerEditorStandalonePreset
      ],
      url: 'https://petstore.swagger.io/v2/swagger.json'
    });
  }

}
