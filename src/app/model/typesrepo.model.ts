import { Typeelement } from "./typeelement.model";
import { TypesrepoPK } from "./typesrepo-pk.model";

export class Typesrepo {
  id:TypesrepoPK;
  templateId:string;
  typeName:string;
  desc:string;
  type:string;
  roottype:boolean;
  typeelements:Typeelement[];
  openchild = true; 
}

