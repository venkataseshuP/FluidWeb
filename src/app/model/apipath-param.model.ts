import { APIPathParamPK } from "./apipath-param-pk.model";

export class APIPathParam {

  id:APIPathParamPK;
  paramName:string;
  template:string;
  paramType:string;
  description:string;
  active:boolean;

  constructor(){
    this.id =  new APIPathParamPK();
  }
}
