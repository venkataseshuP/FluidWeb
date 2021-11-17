import { TypeelementPK } from "./typeelement-pk.model";
import { Typesrepo } from "./typesrepo.model";

export class Typeelement {
  id:TypeelementPK;
  elementName:string;
  elementTypeId:string;
  elementDesc:string;
  minOccurs:number;
  maxOccurs:number;
  typesrepo:Typesrepo;
  type = 'E';
  openchild = true; 

  constructor(){
    this.id = new TypeelementPK();
  }

}
