import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../app/shared/services/auth-service";
import { ParentDataService } from '../dataService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: AuthService,public dataService:ParentDataService) { }
  data = ["Design", "Illustration", "Development", "Coding","Future"];
  colorcodes = ["#8E44AD ", "#E74C3C", "#27AE60", "#E67E22","#2E4053"];
  color = "#2E4053";
  show = "Future";
  i = 1;
  ngOnInit(): void {

    
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



}
