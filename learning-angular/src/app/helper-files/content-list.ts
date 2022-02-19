import { Content } from "./content-interface";

export class ContentList {

  private contentArray: Content[];

  constructor () {
      this.contentArray = [];
  }

  getContentArray(): Content[] {
     return this.contentArray;
  } 

  /* get items(): Content[] {
    return this._;
  } */

  addItem(oneContent: Content): void {
      this.contentArray.push(oneContent);
  }

  lengthofContentArray(): number {
      return this.contentArray.length;
  }

  renderContent(index: number): string {
    if (index >= this.contentArray.length || index < 0) {
      return "<div>Something went terribly wrong</div>"
    }
    let itemAtIndex = this.contentArray[index];
    let tagsArray = this.contentArray[index].tags;
    return `<div class="title">${itemAtIndex.title}</div>
            <div class="description">${itemAtIndex.description}</div>
            <div class="creator">${itemAtIndex.creator}</div>
            <div class="image"><img src="${itemAtIndex.imgURL}" width="200"></div>
            <div class="type">${itemAtIndex.type}</div>`;
    }
}
