import { APIRequestTemplatePK } from "./apirequest-template-pk.model";

export class APIRequestTemplate {

  id:APIRequestTemplatePK;
  type:string;
  templateId:string;
  templatename:string;
  active:boolean;
  description:string;

  constructor(){
    this.id = new APIRequestTemplatePK();
  }
}
