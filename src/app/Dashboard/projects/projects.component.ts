import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { AlertService } from '../../shared/services/alert.service';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[] = [];
  constructor(private projectService:ProjectService,
    private alertService:AlertService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.projectService.getProjects().subscribe((projects:Project[]) =>{
      if(projects){
        this.projects = projects;
      }
    })
  }

  addProject(){
    this.projects.splice(0,0,new Project());
  }

  updateProjectDetails(projectDetails:Project){
    this.projectService.updateProject(projectDetails).subscribe((project:Project) =>{
      if(project){
        this.refresh();
      }
    })
  }

  deleteProject(projectDetails:Project){

  }

  activeprojectsCount(){
    let count = 0;
    this.projects.forEach(project=>{
      if(project.active){
        count++;
      }
    })
    return count;
  }

  unactiveprojectsCount(){
    let count = 0;
    this.projects.forEach(project=>{
      if(!project.active){
        count++;
      }
    })
    return count;
  }

  inItProject(projectDetails:Project){
    if(!projectDetails.projectName || !projectDetails.properties.driverClass || !projectDetails.properties.password || !projectDetails.properties.url ||  !projectDetails.properties.userName ){
      this.alertService.showAlert(2,'All the Details are mandatory');
      return;
    }
    this.projectService.inItProject(projectDetails).subscribe((data)=>{
      if(data){
      }else{
        this.alertService.showAlert(2,'Failed to InIt Project');
      }
      this.refresh();
    });
  }

}
