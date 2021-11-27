import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../app/shared/services/auth-service";
import { ParentDataService } from '../dataService';
import { Project } from '../model/project.model';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email = '';
  projectId ='-1';
  projects:Project[] = [];
  constructor(public authService: AuthService,public dataService:ParentDataService, private projectService:ProjectService) { }
  data = ["Design", "Illustration", "Development", "Coding","Future"];
  colorcodes = ["#8E44AD ", "#E74C3C", "#27AE60", "#E67E22","#2E4053"];
  color = "#2E4053";
  show = "Future";
  i = 1;
  ngOnInit(): void {

    this.email = '';
    this.projectId = '-1';
    this.projects = [];
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.changeText();
    },1000);
  }

  changeText(){

    if(this.i!= this.data.length){
      this.show = this.data[this.i];
      this.color = this.colorcodes[this.i];
      this.i = this.i+1;
    }else{
      this.i = 0;
      this.show = this.data[this.i];
      this.color = this.colorcodes[this.i];
    }

    setTimeout(()=>{
      this.changeText();
    },1000);

  }

  getProjects(){
    this.projectService.getProjects().subscribe((projects:Project[])=>{
      if(projects){
          this.projects = projects;
      }else{
        this.projects = [];
      }
    })
  }



}
