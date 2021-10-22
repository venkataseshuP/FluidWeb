import { Component, OnInit } from '@angular/core';
import AceDiff from 'ace-diff';


@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {

  editor: any;
  constructor() { }

  ngOnInit(): void {
    this.editor = new AceDiff({
      element: '.acediff',
      left: {
        content: JSON.stringify('{"name":"John", "age":30, "car":null}'),
      },
      right: {
        content: JSON.stringify('{"name":"John1", "age":30, "car":null}'),
      },
    });
  }

}
