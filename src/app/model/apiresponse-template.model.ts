import { APIResponseTemplatePK } from "./apiresponse-template-pk.model";

export class APIResponseTemplate {
  id:APIResponseTemplatePK;
  type:string;
  templateId:string;
  active:boolean;
  description:string;

  constructor(){
    this.id = new APIResponseTemplatePK();
  }
}
