import { Component, OnInit } from '@angular/core';

declare const SwaggerUIBundle: any;
@Component({
  selector: 'app-swaggerui',
  templateUrl: './swaggerui.component.html',
  styleUrls: ['./swaggerui.component.css']
})
export class SwaggeruiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      url: 'https://petstore.swagger.io/v2/swagger.json',
    });
  }

}
