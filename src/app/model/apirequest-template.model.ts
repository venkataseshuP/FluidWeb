import { APIRequestTemplatePK } from "./apirequest-template-pk.model";

export class APIRequestTemplate {

  id:APIRequestTemplatePK;
  type:string;
  templateId:string;
  active:boolean;
  description:string;

  constructor(){
    this.id = new APIRequestTemplatePK();
  }
}
