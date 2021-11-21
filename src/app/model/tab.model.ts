import { TabPK } from "./tab-pk.model";

export class Tab {
  id:TabPK;
  path:string;
  name:string;
  type:string;
  desc:string;

  constructor(){
    this.id = new TabPK();
  }
}
