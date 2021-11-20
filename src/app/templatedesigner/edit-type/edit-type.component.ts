import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Typesrepo } from '../../model/typesrepo.model';
import { AlertService } from '../../shared/services/alert.service';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {

  @Input() nativeType:Typesrepo;
  @Output() refresh = new EventEmitter<any>();

  enableModal = false;
  constructor(private templateService:TemplateService,private alertService:AlertService) { }

  ngOnInit(): void {
  }

  update(){
    this.templateService.updateType(this.nativeType).subscribe((data)=>{
      if(data){
        this.alertService.showAlert(1,"successfully updated");
        this.refresh.emit();
        this.enableModal = false;
      }
    });
  }

}
