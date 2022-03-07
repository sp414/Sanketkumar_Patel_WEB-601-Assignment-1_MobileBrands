import { Component, OnInit,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CreateContentComponent } from '../create-content/create-content.component';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() device?: Content;
  arr: Content[] = [
    
    {
      id: 0,
      title: "I phone 13",
      description: "Best phone in the world",
      creator: "Apple",
      type: "Smart Phone",
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000",
      tags: ["appliances", "smartphone"]
    },
    {
      id: 1,
      title: "Samsung S20",
      description: "Best camera phone",
      creator: "Samsung",
      imgURL: "https://i.gadgets360cdn.com/products/large/samsung-galaxy-s20-379x800-1581443902.jpg",
      type: "Smart Phone",
      tags: ["appliances", "smartphone"]
    },
    {
      id: 2,
      title: "Google pixel 6",
      description: "Best Proceessor",
      creator: "Google",
      imgURL: "https://m.media-amazon.com/images/I/71EyTcGszpL._SX679_.jpg",
      type: "Smart Phone",
      tags: ["appliances", "smartphone"]
    },
    {
      id: 3,
      title: "redmi note 10 pro",
      description: "Best display and processor",
      creator: "Mi",
      imgURL: "https://m.media-amazon.com/images/I/81S-XYJlzTL._SL1500_.jpg",
      type: "Smart Phone",
      tags: ["appliances", "smartphone"]
    },
    {
      id: 4,
      title: "Oppo F-19",
      description: "Great Display",
      creator: "Oppo",
      imgURL: "https://m.media-amazon.com/images/I/61I-UqlPd7S._SL1500_.jpg",
      type: "Smart Phone",
      tags: ["appliances", "smartphone"]
    },
    {
      id: 5,
      title: "OnePlus 8",
      description: "First 5G phone",
      creator: "Oneplus",
      imgURL: "https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SX522_.jpg",
      type: "Smart Phone",
      tags: ["appliances", "smartphone"]
    },
    {
      id: 6,
      title: "Samsung Tab S8",
      description: "Best tablet",
      creator: "Samsung",
      imgURL: "https://images.samsung.com/in/galaxy-tab-s8/feature/buy/GalaxyTab_S8Ultra_AllColorKV_WithSPen_MO.jpg",
      type: "Tablet",
      tags: ["appliances", "tablet"]
    },
    {
      id: 7,
      title: "Apple ipad",
      description: "Best tablet processor",
      creator: "Apple",
      imgURL: "https://m.media-amazon.com/images/I/81gd3uyxc3L._AC_SY355_.jpg",
      type: "Tablet",
      tags: ["appliances", "tablet"]
    },
    {
      id: 8,
      title: "Apple watch",
      description: "Best watch",
      creator: "Apple",
      imgURL: "https://icdn.digitaltrends.com/image/digitaltrends/apple-watch-series-4-review_11-625x417-c.jpg",
      type: "Watch",
      tags: ["appliances", "Watch"]
    }
 
  ];
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

  constructor() { 
  }
 

  ngOnInit(): void {
  }

}
