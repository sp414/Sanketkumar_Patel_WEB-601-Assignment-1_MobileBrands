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
    // {
    //   id: 1,
    //   type:'A',
    //   tags:['patriotic','handpump'],
    //   title: 'Gadar',
    //   description: 'EK PREM KATHA',
    //   creator: 'Sunny deol',
    //   imgURL: 'https://images.indianexpress.com/2019/05/gadar-759.jpg',
    // },
    // {
    //   id: 2,
    //   type:'B',
    //   tags:['antihero','action'],
    //   title: 'DEADPOOL',
    //   description: 'ex MILITARY turns mercenary',
    //   creator: 'Rayn Reynolds',
    //   imgURL:
    //     'https://variety.com/wp-content/uploads/2013/06/deadpool-trailer-2.jpg?crop=0px%2C0px%2C1000px%2C557px&resize=681%2C383',
    // },
    // {
    //   id: 3,
    //   tags:['crime','mafia'],
    //   title: 'The Godfather',
    //   description: 'Story of Italian Mafia',
    //   creator: 'Mario Puzo',
    //   imgURL:
    //     'https://www.irishtimes.com/polopoly_fs/1.4397595.1604322543!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
    // },
    // {
    //   id: 4,
    //   type:'A',
    //   tags:['patriotic','mathuradas'],
    //   title: 'Border',
    //   description: 'LONGEWALA POST BATTLE device',
    //   creator: 'Sunny Deol',
    //   imgURL:
    //     'https://qqcdnpictest.mxplay.com/pic/0de9278525bf80c5cc15c089cfc10824/en/16x9/640x360/fe8753729f968578f41928a68bf884b0_1920x1080.jpg',
    // },
    // {
    //   id: 5,
    //   type:'B',
    //   tags:['t-virus','Zombies'],
    //   title: 'Resident evil',
    //   description: 'You all are gonna DIE down here',
    //   creator: 'Alice',
    //   imgURL:
    //     'https://wallpapercave.com/wp/wp1949442.jpg',
    // },
    // {
    //   id: 6,
    //   tags:['Party','rave'],
    //   title: 'Project-X',
    //   description: "Ultimate bachelor's party",
    //   creator: 'Dealer 101',
    //   imgURL:'https://c4.wallpaperflare.com/wallpaper/500/550/428/project-x-2012-project-x-poster-wallpaper-preview.jpg',
    // },
    // {
    //   id: 7,
    //   type:'A',
    //   tags:['motivational','awesome'],
    //   title: 'Forrest Gump',
    //   description: "Momma and chocolate",
    //   creator: 'Positivity',
    //   imgURL:'https://cdn.wallpapersafari.com/90/46/wU90oZ.jpg',
    // },
    // {
    //   id: 8,
    //   type:'A',
    //   tags:['motivational','awesome'],
    //   title: 'NO IMAGE',
    //   description: "Momma and chocolate",
    //   creator: 'Positivity',
    //   imgURL:'',
    // },
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
