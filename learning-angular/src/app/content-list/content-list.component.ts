import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MobileServicesService } from '../Services/mobile-services.service';
import { MessageService } from '../message.service';
import { DEVICES } from '../helper-files/contentDb';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  constructor(private contentService: MobileServicesService,public messageService: MessageService) {}
  arr:Content[]=[];
  device_id!: number;
  singleItem:Content[] = [];

  deviceInfo($event: any){    
    console.log(`device id: ${$event.id}`,"device Title: "+$event.title+ $event.$mvnm)
  }    
  found:boolean = false;
  notfound:boolean = false;
  ttl:string = '';

  isdevice($mvnm:string){
    var flag:Boolean = false;  
    this.arr.forEach((elem)=>{
      
      if(elem.title.toLowerCase().includes($mvnm.toLowerCase())){
        this.ttl = elem.title;
        this.found = true;
        this.notfound = false;
        flag = true;
        setTimeout(()=>{
          this.found = false;
        }, 2000)
      }
    });
    if(!flag){
      this.notfound = true;
      this.found = false;
      setTimeout(()=>{
        this.notfound = false;
      }, 2000)
    }
    
    // return x;
    console.log("device FOUND STATUS: ",this.found);
   }
   addNewdevice(device:Content){
    if(device){
    this.arr.push(device);
    this.arr = this.arr.slice();
    }
  }



  ngOnInit(): void {
    this.contentService.getContent().subscribe(contentArray => {
      this.arr = contentArray; 
    });
  }

  showDevice(id: Number) {
    console.log(id);
    this.contentService.getIDCOntent(id).subscribe(singleitem => {
      this.singleItem = singleitem;
    });
    //add to message service
    this.messageService.add('Content item at id:' + Number(id));
  }

  refreshContentList(contentList: Content[]): void {
    this.messageService.add("Conent list array added with new items");
    this.arr = [...this.arr, ...contentList];
  }

  refreshContentListAfterUpdate(): void {
    this.messageService.add("Conent list item is successfully updated");
    this.contentService.getContent().subscribe(contentArray => {
      this.arr = contentArray;
    })
  }

}