import { Injectable } from "@angular/core";
@Injectable()
export class ParentDataService {
  activeProjectId:string;
  activeProject:any;
  activeTabId = 0;
  alert = false;
  alertmsg = '';
  alerttype = 1;
  selectedItemDetails = {
    path: '',
  };
  spinner = false;
  load = false;
  tabType = {
    "0": "Apps",
    "1": "Folder",
    "2": "Template",
    "3": "ftl",
    "4": "Swagger Spec",
    "5": "apidoc",
    "6": "Admin Portal"
  }
  tabs = [
    {
      "desc": "Home",
      "type": "1",
      "path": "/Home",
      "tabPrev": false,
      "tabNext": false,
      "prev": false,
      "next": false,
      "save": false,
      "bookmark": true,
      "locked": true,
      "error": false,
      "tabDesc": "Folder",
      "explorer": true,
      "list": false,
      "id":"FE_0000001"
    }
  ];

  explorerMenu:any = [
    {
      name: "Home",
      id: "1234567890",
      path: "/Home",
      children: [
      ],
    }
  ];

  ui = {

  }

  refreshDataService(){
    this.tabs =  [
      {
        "desc": "Home",
        "type": "1",
        "path": "/Home",
        "tabPrev": false,
        "tabNext": false,
        "prev": false,
        "next": false,
        "save": false,
        "bookmark": true,
        "locked": true,
        "error": false,
        "tabDesc": "Folder",
        "explorer": true,
        "list": false,
        "id":"FE_0000001"
      }
    ];
  }

  getTypeJson(type) {

    let tempJson = {};
    switch (type) {
      case 'F1':
        tempJson = {
          'id':this.getId(),
          'type': 'F1',
          'typedesc': 'text',
          'desc': '',
          'label': true,
          'align': '1',
          'label-align': 'left',
          'name': '',
          'width': '4',
          'placeholder': '',
          'readonly': false,
          'mandatory': false,
          'customcss':'',
        }
        return tempJson;
      case 'H2':
        tempJson = {
          'id':this.getId(),
          'type': 'H2',
          'typedesc': 'text',
          'desc': '',
          'label': true,
          'align': '1',
          'color': '#000000',
          'font-size': 12,
          'font-weight': 100,
          'font-style': 'normal',
          'font-weight-desc': 'Regular',
          'openMenu': false,
          'label-align': 'left',
          'name': '',
          'width': '4',
          'placeholder': '',
          'readonly': false,
          'mandatory': false,
          'customcss':'',
        }
        return tempJson;
      case 'H3':
        tempJson = {
          'id':this.getId(),
          'type': 'H3',
          'desc': '',
          'height': 1,
          'width': 12,
          'color': '#000000',
          'customcss':'',
        }
        return tempJson;
      case 'H4':
        tempJson = {
          'id':this.getId(),
          'type': 'H4',
          'desc': '',
          'height': 20,
          'color': '#ffffff',
          'customcss':'',
        }
        return tempJson;
      case 'H5':
        tempJson = {
          'id':this.getId(),
          'type': 'H5',
          'desc': '',
          'width': 4,
          'height': 60,
          'color': '#ffffff',
          'customcss':'',
        }
        return tempJson;
      default:
        return tempJson;

    }
  }

  getActiveTabContent(){
    return this.tabs[this.activeTabId];
  }

  drop(index){
    event.stopPropagation();
    this.loadSpinner();
      let type = this.getActiveTabContent()['dragelement']['elementtype'];
      if(index == -1){
        this.getActiveTabContent()['elements'].push(this.getTypeJson(type));
      }else{
        this.getActiveTabContent()['elements'].splice(index+1,0,this.getTypeJson(type));
      }

      this.stopSpinner();
  }

  loadSpinner(){
    this.load = true;
  }

  stopSpinner(){
    this.load = false;
  }

  getId(){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

};
