import { APIQueryParamPK } from "./apiquery-param-pk.model";

export class APIQueryParam {

  id:APIQueryParamPK;
  paramName:string;
  template:string;
  paramType:string;
  description:string;
  mandatory:boolean;
  defaultvalue:string;

  constructor(){
    this.id =  new APIQueryParamPK();
  }
}