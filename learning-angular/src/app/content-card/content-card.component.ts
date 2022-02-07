import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  myList: ContentList;
  contentArray: Content[] = [];

  constructor() {
    this.myList = new ContentList();
    this.myList.addItem({
      id: 0,
      title: "I phone 13",
      description: "Best phone in the world",
      creator: "Apple",
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
    });
    this.myList.addItem({
      id: 1,
      title: "Samsung S20",
      description: "Best camera phone",
      creator: "Samsung",
      imgURL: "../assets/samsung-s20.jpg"
      
    });
    this.myList.addItem({
      id: 2,
      title: "Google pixel 6",
      description: "Best Proceessor",
      creator: "Google",
      imgURL: "../assets/Google-pixel.jpg",
      type: "Smart Phone"
    });
    this.contentArray = this.myList.getContentArray();
    console.log(this.contentArray);
  }

  ngOnInit(): void {}

}
