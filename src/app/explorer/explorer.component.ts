import { FileExplorerService } from './../shared/services/file-explorer.service';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ParentDataService } from '../dataService';
import { FluidDesignerComponent } from '../fluid-designer/fluid-designer.component';
import { AuthService } from '../shared/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  @ViewChild('designer') designer :FluidDesignerComponent;


  // explorer properties and functions
  tabWidth=258;
  activeDragId;
  activeDropId;
  activeItems = [];
  disableclick = false;
  explorerContextMenu = false;
  constructor(
    public dataService:ParentDataService,
    public authService:AuthService,
    public router:Router,
    public fileExplorerService:FileExplorerService,
    ) {
    this.fileExplorerService.refreshExplorerMenu();
    this.refreshExplorer();
  }

  refreshExplorer(){
    this.realignTabs();
  }

  ngOnInit(): void {
   if(localStorage.getItem('logged') == '0'){
     this.refreshExplorer();
     localStorage.setItem('logged','1');
   }else{
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
   }

  }

  getUserFirstLetter(){
    return this.authService.getUserFirstLetter();
  }

  realignTabs(){
    let width = (window.innerWidth/this.dataService.tabs.length+20);
    this.tabWidth = width<258?width:258;
  }

  openTab(tabId){
    this.dataService.activeTabId = tabId;
    this.realignTabs();
    this.refreshContent();
  }

  closeTab(i){

    if(this.dataService.tabs.length == 1) return;
    if(this.dataService.activeTabId == i){
      if(i>0){
        this.openTab(i-1);
      }else{
        this.openTab(i);
      }
    }else if(this.dataService.activeTabId<i){
      this.openTab(this.dataService.activeTabId);
    }else{
      this.openTab(this.dataService.activeTabId-1);
    }
    this.dataService.tabs.splice(i,1);
  }

  dragEnter(Id){
    event.preventDefault();
    if(this.activeDragId>=0){
      this.activeDropId=Id;
    }
  }

  dragOver(event){
     event.preventDefault();
  }

  dragDrop(Id){
    if(this.activeDragId>=0){
    let temp=this.dataService.tabs[this.activeDragId];
    this.removeTab(this.activeDragId);
    this.dataService.tabs.splice(Id, 0, temp);
    this.openTab(Id);
  }else{
    this.activeDropId=-1;
    this.activeDragId=-1;
  }
  }

  dragStart(id){
    this.activeDragId=id;
  }
  dragEnd(type){
     this.activeDropId=-1;
     this.activeDragId=-1;
  }

  removeTab(index){
    if(index>=0){
      this.dataService.tabs.splice(index,1);
      if(this.dataService.activeTabId>index){
        this.openTab(this.dataService.activeTabId-1);
      }else if(this.dataService.activeTabId == index){
        if(index == 0){
          if(this.dataService.tabs.length>0)
          this.openTab(index);
        }else{
          this.openTab(index-1);
        }
      }
    }
    this.authService.savedata();
  }

  close(event){


  }

  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  openContextmenu(event){
    event.preventDefault();
    this.disableitemContextMenu();
    this.contextmenuX = event.clientX;
    this.contextmenuY = event.clientY;
    this.contextmenu = true;
    setTimeout(()=>{
      let element = document.getElementById("contextmenu");
      let width = window.screen.width;
      let height = window.screen.height;
      let elementheight = element.offsetHeight;
      let elementwidth = element.offsetWidth;
      if(this.contextmenuX+elementwidth >width){
        this.contextmenuX = event.clientX-elementwidth;
      }
      if(this.contextmenuY+elementheight >height){
        this.contextmenuY = event.clientY-elementheight;
      }
    },100);
  }

  disableContextMenu() {
    this.contextmenu = false;
  }


  itemcontextmenu = false;
  itemcontextmenuX = 0;
  itemcontextmenuY = 0;

  openitemContextmenu(event,itemDetails,explorerContextMenuFlag){
    event.stopPropagation();
    event.preventDefault();
    this.disableContextMenu();
    this.explorerContextMenu = explorerContextMenuFlag;
    this.dataService.selectedItemDetails = itemDetails;
    this.itemcontextmenuX = event.clientX
    this.itemcontextmenuY = event.clientY
    this.itemcontextmenu = true;
  }

  disableitemContextMenu() {
    this.itemcontextmenu = false;
  }

  stopemitting(event){
    event.stopPropagation();
  }

  @HostListener('document:click')clickout() {
    event.stopPropagation();
    this.disableContextMenu();
    this.disableitemContextMenu();
    if(this.dataService.selectedItemDetails.path != ''){
      this.dataService.selectedItemDetails = {
        path:'',
      }
    }


  }


  @HostListener('window:beforeunload', ['$event'])beforeUnloadHander(event) {

  }

  getItems(){
    let itemId  = this.dataService.tabs[this.dataService.activeTabId].id;
    let details = this.getFileChildrens(this.dataService.explorerMenu,itemId);
    return details == null? []:details;
  }

  getFileChildrens(itemDetails:any, itemId:any){
    for(let i = 0;i<itemDetails.length;i++){
      if(itemDetails[i].id.itemId == itemId){
        return itemDetails[i].children;
      }
      let details  = this.getFileChildrens(itemDetails[i].children,itemId);
      if(details != null){
        return details;
      }
    }
    return null;
  }

  getParentData(){
    // let items;
    // let activepath = this.dataService.tabs[this.dataService.activeTabId].path;
    // let pathsArray = activepath.split("/");

    // items = this.dataService.explorerMenu[0];
    // for(let i = 1;i<pathsArray.length-1;i++){
    //   if(pathsArray[i] == items['name']){
    //     items = items['children'];
    //   }else{
    //     for(let j =0;j<items.length;j++){
    //       if(pathsArray[i] == items[j]['name']){
    //         items = items[j].children;
    //       }
    //     }
    //   }
    // }
    // return items;
    return [];
  }

  refreshContent(){
    let type = this.dataService.tabs[this.dataService.activeTabId].type;
    setTimeout(()=>{
    if(type == '1'){
      this.fileExplorerService.refreshExplorerMenu();
    }
    else if(type == '2'){
      this.designer.refresh();
    }
  });
  }

  async open(itemDetails){
    event.stopPropagation();
      this.dataService.selectedItemDetails = itemDetails;
      if(this.checkTabs(itemDetails.id.itemId)){
        return;
      }else{
        await this.fileExplorerService.setFilePath(itemDetails.id.itemId);
        await this.addNewTab(itemDetails.path,itemDetails.name,itemDetails.name,itemDetails.type,itemDetails.id.itemId);
      }

  }



  openItem(itemDetails){
    event.stopPropagation();
    itemDetails.showChildren = !itemDetails.showChildren;
    this.dataService.selectedItemDetails = itemDetails;
    this.authService.saveExplorerMenu();
  }

 async addNewTab(path,name,desc,type,id){
  this.dataService.load = true;
    let tabjson = {
      "desc":name,
      "type":type,
      "id":id,
      "path":path,
      "tabPrev":false,
      "tabNext":false,
      "prev":false,
      "next":false,
      "save":false,
      "bookmark":false,
      "locked":false,
      "error":false,
      "tabDesc":desc,
      "explorer":true,
      "list":false,
    }

    if(type == '2'){
      tabjson['leftTabId'] = '0'
      tabjson['rightTabId'] = '0'
      tabjson['componentName'] = name;
      tabjson['componentTitle'] = name.split('.')[0];
      tabjson['backgroundVisible'] = true;
      tabjson['backgroundColor'] = '#ffffff';
      tabjson['backgroundOpacity'] = '100';
      tabjson['activeelement'] = '-1';
      tabjson['elements'] = [];
    }
    await this.dataService.tabs.push(tabjson);
    await this.openTab(this.dataService.tabs.length-1);
    this.dataService.load = false;
  }

  checkTabs(id){
    for(let i = 0;i<this.dataService.tabs.length;i++){
      if(this.dataService.tabs[i].id == id){
        this.openTab(i);
        return true;
      }
    }
    return false;
  }


  addNewFolder(){
    let name = "NewFolder"+this.getNewFolderCount("NewFolder");
    let fileDetails = {
      name : name,
      type :"1",
      parentId:this.dataService.tabs[this.dataService.activeTabId].id,
      showChildren:false,
      children:[]
    }
    this.fileExplorerService.createFile(fileDetails);
  }

  addSwagger(){
    let name = "NewSwagger"+this.getNewFolderCount("NewSwagger");
    let fileDetails = {
      name : name,
      type :"4",
      parentId:this.dataService.tabs[this.dataService.activeTabId].id,
      showChildren:false,
      children:[]
    }
    this.fileExplorerService.createFile(fileDetails);
  }

  addNewTemplate(){

    let name = "NewTemplate"+this.getNewFolderCount("NewTemplate");
    let fileDetails = {
      name : name,
      type :"2",
      id:this.getId(),
      parentId:this.dataService.tabs[this.dataService.activeTabId].id,
      showChildren:false,
      children:[]
    }

    this.fileExplorerService.createFile(fileDetails);

  }

  addUIComponent(){

    let name = "New FTL"+this.getNewFolderCount("New FTL")+".ftl";
    let fileDetails = {
      name : name,
      type :"3",
      id:this.getId(),
      parentId:this.dataService.tabs[this.dataService.activeTabId].id,
      showChildren:false,
      children:[]
    }

    this.fileExplorerService.createFile(fileDetails);

  }

  getNewFolderCount(value){

    let items:any = this.getItems();
    let counter = 0;
    for(let i = 0;i<items.length;i++){
      if(items[i].name.split(".")[0].indexOf(value)>-1)
        counter++;
    }

    return counter == 0?"":"("+counter+")";
  }

  stopPropagation(){
    event.stopPropagation();
  }

  changeName(itemDetails,value){
    event.stopPropagation();
    itemDetails.name = value;
    this.fileExplorerService.updateFile(itemDetails);
  }

  getBookmark(){
    let items = this.getParentData();

    for(let i = 0;i<items.length;i++){
      if(items[i].path == this.dataService.tabs[this.dataService.activeTabId].path){
        return items[i].favourite;
      }
    }

    return false;
  }

  setbookmark(){
    event.stopPropagation();
    let items = this.getParentData();

    for(let i = 0;i<items.length;i++){
      if(items[i].path == this.dataService.tabs[this.dataService.activeTabId].path){
        items[i].favourite = !items[i].favourite;
      }
    }

    this.authService.saveExplorerMenu();
  }

  updateTab(path,value){

    for(let i = 0;i<this.dataService.tabs.length;i++){

      if(this.dataService.tabs[i].path == path){
        this.dataService.tabs[i].path = this.dataService.tabs[i].path.substring(0,this.dataService.tabs[i].path.lastIndexOf("/"))+"/"+value;
        this.dataService.tabs[i].desc = value;
      }
    }
  }

  selectchild(itemDetails){
    event.stopPropagation();
    this.dataService.selectedItemDetails = itemDetails;
    this.authService.saveselectedItems();
  }

  setFavourite(){

      this.dataService.selectedItemDetails['favourite'] = !this.dataService.selectedItemDetails['favourite'];
      this.authService.saveExplorerMenu();
  }

  async openInSameTab(itemDetails) {

    if (this.checkTabs(itemDetails.id.itemId)) {
      return;
    } else {
      let tabjson = {
        "desc": itemDetails.name,
        "type": itemDetails.type,
        "path": itemDetails.path,
        "id": itemDetails.id.itemId,
        "tabPrev": false,
        "tabNext": false,
        "prev": false,
        "next": false,
        "save": false,
        "bookmark": false,
        "locked": false,
        "error": false,
        "tabDesc": itemDetails.name,
        "explorer": true,
        "list": false,
      }

      this.dataService.tabs[this.dataService.activeTabId] = tabjson;
      await this.fileExplorerService.setFilePath(itemDetails.id.itemId);
      this.refreshContent();
    }
  }

  delete(itemdetails){
    this.deleteTabWithPath(itemdetails.id.itemId);
    this.fileExplorerService.deleteFile(itemdetails);
  }

  deleteTabWithPath(id){

    for(let i = 0;i<this.dataService.tabs.length;i++){
      if(this.dataService.tabs[i].id == id){
        this.dataService.tabs.splice(i,1);
      }
    }
  }

  SignOut(){
    this.authService.SignOut();
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

  lockTab(){
    this.dataService.tabs[this.dataService.activeTabId]['locked'] = !this.dataService.tabs[this.dataService.activeTabId]['locked'];
    this.authService.saveTabData();
  }

  setProperty(key,value){

    this.dataService.tabs[this.dataService.activeTabId][key]  = value;
    this.authService.saveExplorerMenu();
  }

  async saveTab(){
    this.dataService.load = true;
    let type = this.dataService.tabs[this.dataService.activeTabId].type;
    setTimeout(async ()=>{
    if(type == '2'){
      let elements = this.dataService.tabs[this.dataService.activeTabId]['elements'];
      let id = this.dataService.tabs[this.dataService.activeTabId]['id'];
      if(this.dataService.ui[id])
        this.dataService.ui[id]['elements'] = elements;
      else{
        this.dataService.ui[id] = {
          elements:elements,
        }
      }
      this.dataService.tabs[this.dataService.activeTabId]['save'] = false;
      await this.authService.saveui();
      this.dataService.load = false;
    }
  },10);

  }

  refreshTab(){
    this.fileExplorerService.refreshExplorerMenu();
  }

  setFilePath(itemId: string){
    this.fileExplorerService.setFilePath(itemId);
  }

  openHome(){
    let itemDetails = {
      "name": "Home",
      "type": "1",
      "path": "/Home",
      "id":{
        "itemId":"FE_0000001",
      }
    }
    this.openInSameTab(itemDetails);
  }

  openApps(){
    this.router.navigate(['/apps']);
  }

  gotoParent(){
    this.fileExplorerService.getParentDetails(this.dataService.tabs[this.dataService.activeTabId].id).subscribe(data=>{
      if(data){
        this.openInSameTab(data);
      }
    });
    this.contextmenu = false;
  }

  

}
