import { Component, OnInit, ɵNG_DIR_DEF } from '@angular/core';
import { ParentDataService } from '../../dataService';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  drag = false;
  formAssest = [
    {
      type:1,
      elementtype:'A1',
      disabled:true,
      imgurl:'../../../assets/images/fluiddesigner/form.svg',
      label:'Form',
    },
    {
      type:1,
      elementtype:'A2',
      disabled:true,
      imgurl:'../../../assets/images/fluiddesigner/inputgrid.svg',
      label:'Input Grid',
    },
    {
      type:2,
      elementtype:'A3',
      disabled:true,
      imgurl:'../../../assets/images/fluiddesigner/grid.svg',
      label:'Read Only Grid',
    }
  ];

  formElements = [
    {
      type:1,
      elementtype:'F1',
      disabled:false,
      imgurl:'../../../assets/images/fluiddesigner/textBox.svg',
      label:'Text Box',
    },
    {
      type:1,
      elementtype:'F2',
      disabled:true,
      imgurl:'../../../assets/images/fluiddesigner/textarea.svg',
      label:'Text Area',
    },
    {
      type:1,
      elementtype:'F3',
      imgurl:'../../../assets/images/fluiddesigner/button.svg',
      label:'Button',
      disabled:true,
    },
    {
      type:1,
      elementtype:'F4',
      imgurl:'../../../assets/images/fluiddesigner/date.svg',
      label:'Date',
      disabled:true,
    },
    {
      type:1,
      elementtype:'F5',
      imgurl:'../../../assets/images/fluiddesigner/checkbox.svg',
      label:'Checkbox',
      disabled:true,
    },
    {
      type:1,
      elementtype:'F6',
      imgurl:'../../../assets/images/fluiddesigner/dropdown.svg',
      label:'Dropdown',
      disabled:true,
    },
    {
      type:1,
      elementtype:'F7',
      imgurl:'../../../assets/images/fluiddesigner/upload.svg',
      label:'File Upload',
      disabled:true,
    },
    {
      type:1,
      elementtype:'F8',
      imgurl:'../../../assets/images/fluiddesigner/amount.svg',
      label:'Amount',
      disabled:true,
    },
    {
      type:1,
      elementtype:'F9',
      imgurl:'../../../assets/images/fluiddesigner/multiselection.svg',
      label:'Select Box',
      disabled:true,
    }
  ];

  htmlElements = [
    {
      type:1,
      elementtype:'H1',
      label:'Html',
      disabled:true,
    },
    {
      type:1,
      elementtype:'H2',
      label:'Label',
      disabled:false,
    },
    {
      type:1,
      elementtype:'H3',
      imgurl:'../../../assets/images/fluiddesigner/line.svg',
      label:'Line',
      disabled:false,
    },
    {
      type:1,
      elementtype:'H4',
      imgurl:'../../../assets/images/fluiddesigner/break.svg',
      label:'Break',
      disabled:false,
    },
    {
      type:1,
      elementtype:'H5',
      imgurl:'../../../assets/images/fluiddesigner/space.svg',
      label:'Space',
      disabled:false,
    },
    {
      type:1,
      elementtype:'H6',
      imgurl:'../../../assets/images/fluiddesigner/paragraph.svg',
      label:'Paragraph',
      disabled:true,
    },
    {
      type:1,
      elementtype:'H7',
      imgurl:'../../../assets/images/fluiddesigner/image.svg',
      label:'Image',
      disabled:true,
    }
  ];

  constructor(public dataService:ParentDataService) { 
  }

  dragstart(elementDetails){
    this.dataService.tabs[this.dataService.activeTabId]['dragelement'] = elementDetails;
    this.dataService.tabs[this.dataService.activeTabId]['internalDrag'] = false;  
  }

  dragend(){
    this.drag = false;
    this.dataService.tabs[this.dataService.activeTabId]['internalDrag'] = false;  

  }


  ngOnInit(): void {
  }

}
