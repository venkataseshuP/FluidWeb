import { APIRepoPK } from "./apirepo-pk.model";

export class APIRepo {
  id:APIRepoPK;
  desc:string;
  apiName:string;
  type:string;
  endpointId:string;
  method:string;
  url:string;
}
