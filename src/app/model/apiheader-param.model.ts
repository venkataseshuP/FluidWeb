import { APIHeaderParamPK } from "./apiheader-param-pk.model";

export class APIHeaderParam {

  id:APIHeaderParamPK;
  paramName:string;
  template:string;
  paramType:string;
  description:string;
  mandatory:boolean;
  defaultvalue:string;

  constructor(){
    this.id =  new APIHeaderParamPK();
  }
}
