import { ParentDataService } from './../../dataService';
import { HttpCommonService } from './http-common.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {

  constructor(private httpCommonservice:HttpCommonService,
    private dataService:ParentDataService,
    private authService:AuthService) { }

  refreshExplorerMenu(){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/file/'+'FE_0000001';
    this.httpCommonservice.httpGet(url).subscribe(data=>{
      this.dataService.explorerMenu =  [];
      this.dataService.explorerMenu.push(data);
    });
  }

  getFiles(id:string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/file/'+id;
    this.httpCommonservice.httpGet(url).subscribe(data=>{
      return data;
    });
  }

  getFilesBySamplePath(samplepath:string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/filesByPath/';
    return this.httpCommonservice.httpPost(url,samplepath.toUpperCase());
  }

  getFilesByTypeAndSamplePath(type:string, samplepath:string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/filesByType/'+type;
    return this.httpCommonservice.httpPost(url,samplepath.toUpperCase());
  }

  createFile(fileDetails:any){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/file';
    fileDetails['pid'] = this.dataService.activeProjectId;
    this.httpCommonservice.httpPost(url,fileDetails).subscribe(data=>{
      this.refreshExplorerMenu();
      return data;
    });
  }

  updateFile(fileDetails:any){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/file';
    fileDetails['pid'] = this.dataService.activeProjectId;
    this.httpCommonservice.httpPut(url,fileDetails).subscribe(data=>{
      this.refreshExplorerMenu();
      return data;
    });
  }

  deleteFile(fileDetails: any){
    let url: any = this.httpCommonservice.baseurl + "/" + this.dataService.activeProjectId + '/file/' + fileDetails.id.itemId;
    return this.httpCommonservice.httpdelete(url).subscribe(() => {
      this.refreshExplorerMenu();
    });
  }

  setFilePath(itemId: string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/file/path/'+itemId;
    this.httpCommonservice.httpGet(url).subscribe(data=>{
      this.dataService.tabs[this.dataService.activeTabId]['path'] = data['path'];
    });
  }

  getParentDetails(itemId: string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/file/parent/'+itemId;
    return this.httpCommonservice.httpGet(url);
  }

  getFavouriteFiles(){
    let url:any = this.httpCommonservice.baseurl+'/'+this.authService.userData.uid+'/'+this.dataService.activeProjectId+'/favourites';
    return this.httpCommonservice.httpGet(url);
  }

  addFavourite(itemId:string){
    let url:any = this.httpCommonservice.baseurl+'/favourite';
    let body = {
      id:{
        userid:this.authService.userData.uid,
        pid:this.dataService.activeProjectId,
        itemid:itemId,
      }
    }
    return this.httpCommonservice.httpPost(url,body);
  }

  removeFavourite(itemId:string){
    let url:any = this.httpCommonservice.baseurl
                  +'/'+this.authService.userData.uid
                  +'/'+this.dataService.activeProjectId
                  +'/favourite'
                  +'/'+itemId;
    return this.httpCommonservice.httpdelete(url);
  }

  getSpecDetails(specId:string){
    let url:any = this.httpCommonservice.baseurl+'/'+this.dataService.activeProjectId+'/spec/'+specId;
    return this.httpCommonservice.httpGet(url);
  }

  saveSwaggerSpec(spec:String, itemId:string){
    let specDetails = {
      id:{
        itemId:itemId,
        pid:this.dataService.activeProjectId,
      },
      spec : spec
    }
    let url:any = this.httpCommonservice.baseurl+'/swagger/spec';
    return this.httpCommonservice.httpPost(url,specDetails);
  }

}
