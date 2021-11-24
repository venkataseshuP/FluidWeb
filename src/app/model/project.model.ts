import { ProjectProperties } from "./project-properties.model";

export class Project {
  pid:string;
  projectName:string;
  active:boolean;
  init:boolean;
  properties:ProjectProperties;

  constructor(){
    this.properties = new ProjectProperties();
  }
}
