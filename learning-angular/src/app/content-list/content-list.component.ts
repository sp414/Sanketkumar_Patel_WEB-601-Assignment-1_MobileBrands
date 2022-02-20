import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;

  contentItems: Content[];
  constructor() { 
    this.contentItems = [
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
        imgURL: "../assets/samsung-s20.jpg",
        type: "Smart Phone",
        tags: ["appliances", "smartphone"]
      },
      {
        id: 2,
        title: "Google pixel 6",
        description: "Best Proceessor",
        creator: "Google",
        imgURL: "../assets/Google-pixel.jpg",
        type: "Smart Phone",
        tags: ["appliances", "smartphone"]
      },
      {
        id: 3,
        title: "redmi note 10 pro",
        description: "Best display and processor",
        creator: "Mi",
        imgURL: "../assets/redmi-10.jpg",
        type: "Smart Phone",
        tags: ["appliances", "smartphone"]
      },
      {
        id: 4,
        title: "Oppo F-19",
        description: "Great Display",
        creator: "Oppo",
        imgURL: "../assets/oppo-f19.jpg",
        type: "Smart Phone",
        tags: ["appliances", "smartphone"]
      },
      {
        id: 5,
        title: "OnePlus 8",
        description: "First 5G phone",
        creator: "Oneplus",
        imgURL: "../assets/oneplus8.jpg",
        type: "Smart Phone",
        tags: ["appliances", "smartphone"]
      },
      {
        id: 6,
        title: "Samsung Tab S8",
        description: "Best tablet",
        creator: "Samsung",
        imgURL: "../assets/S8-tablet.jpg",
        type: "tablet",
        tags: ["appliances", "tablet"]
      },
      {
        id: 7,
        title: "Apple ipad",
        description: "Best tablet processor",
        creator: "Apple",
        imgURL: "../assets/apple-ipad.jpg",
        type: "tablet",
        tags: ["appliances", "tablet"]
      },
      {
        id: 8,
        title: "Apple watch",
        description: "Best watch",
        creator: "Apple",
        imgURL: "../assets/apple-watch.jpg",
        type: "",
        tags: ["appliances", "Watch"]
      }
    ]
  }

  ngOnInit(): void {
  }

  onImageClick(id: number, title: string): void {
    console.log("Card component's id:", id);
    console.log("Card component's title:", title);
  }
  
  checkForTitle(searchValue: string): void{
    let searchList = this.contentItems.filter(c => c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the mobile!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No mobile with that title";
      this.searchFlag = false;
    }
  }
  donothing(){

  } 


}
