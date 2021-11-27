import { Injectable } from '@angular/core';
import { ParentDataService } from '../../dataService';
import { Project } from '../../model/project.model';
import { AuthService } from './auth-service';
import { HttpCommonService } from './http-common.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private dataService:ParentDataService,
    private httpCommonService:HttpCommonService,
    private authService:AuthService
  ) { }

  getProjects(){
    let url = this.getBasePath()+'/projects';
    return this.httpCommonService.httpCommonGet(url);
  }

  updateProject(projectDetails:Project){
    let url = this.getBasePath()+'/project';
    return this.httpCommonService.httpPut(url,projectDetails);
  }

  inItProject(projectDetails:Project){
    let url = this.getBasePath()+'/project/init';
    return this.httpCommonService.httpPost(url,projectDetails);
  }

  getBasePath(){
    return this.httpCommonService.baseurl;
  }
}
