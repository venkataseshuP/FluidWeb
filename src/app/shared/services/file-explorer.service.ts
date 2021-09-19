import { ParentDataService } from './../../dataService';
import { HttpCommonService } from './http-common.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {

  constructor(private httpCommonservice:HttpCommonService,
    private parentDataService:ParentDataService,
    private authService:AuthService) { }

  refreshExplorerMenu(){
    let url:any = this.httpCommonservice.baseurl+'/'+this.authService.activeProjectId+'/file/'+'FE_0000001';
    this.httpCommonservice.httpGet(url).subscribe(data=>{
      this.parentDataService.explorerMenu =  [];
      this.parentDataService.explorerMenu.push(data);
    });
  }

  getFiles(id:string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.authService.activeProjectId+'/file/'+id;
    this.httpCommonservice.httpGet(url).subscribe(data=>{
      return data;
    });
  }

  createFile(fileDetails:any){
    let url:any = this.httpCommonservice.baseurl+'/'+this.authService.activeProjectId+'/file';
    fileDetails['pid'] = this.authService.activeProjectId;
    this.httpCommonservice.httpPost(url,fileDetails).subscribe(data=>{
      this.refreshExplorerMenu();
      return data;
    });
  }

  updateFile(fileDetails:any){
    let url:any = this.httpCommonservice.baseurl+'/'+this.authService.activeProjectId+'/file';
    fileDetails['pid'] = this.authService.activeProjectId;
    this.httpCommonservice.httpPut(url,fileDetails).subscribe(data=>{
      this.refreshExplorerMenu();
      return data;
    });
  }

  deleteFile(fileDetails:any){
    let url:any = this.httpCommonservice.baseurl+"/"+this.authService.activeProjectId+'/file/'+fileDetails.id.itemId;
    return this.httpCommonservice.httpdelete(url).subscribe( ()=>{
      this.refreshExplorerMenu();
    });
  }

  setFilePath(itemId: string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.authService.activeProjectId+'/file/path/'+itemId;
    this.httpCommonservice.httpGet(url).subscribe(data=>{
      this.parentDataService.tabs[this.parentDataService.activeTabId]['path'] = data['path'];
    });
  }

}
