import { Content } from '../helper-files/content-interface';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MobileServicesService } from '../Services/mobile-services.service';

@Component({
  selector: 'app-modify-content-list',
  templateUrl: './modify-content-list.component.html',
  styleUrls: ['./modify-content-list.component.scss']
})
export class ModifyContentListComponent implements OnInit {

  constructor(private contentListService: MobileServicesService) { }
  newContent?: Content;
  contentList: Content[] = [];
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @ViewChild('addButton', { static: true })
  addButton!: ElementRef;

  ngOnInit(): void {
    this.contentListService.getContent().subscribe(contentArray => {
      this.contentList = contentArray;
    });
  }

  addContent(id: string, title: string, description: string, type: string, creator: string, imageURL: string, tags: string): void {
    if(id && this.checkForContentItem(Number(id))) {
      let modifiedContent = {
        id: Number(id),
        title: title,
        type: type,
        description: description,
        creator: creator,
        imgURL: imageURL,
        tags: tags.split(','),
      }
      console.log("modify event");
      this.addButton.nativeElement.innerHTML = 'Modifing the item';
      this.updateContentEvent.emit(modifiedContent);
    } else {
      let newContent = {
        title: title,
        type: type,
        description: description,
        creator: creator,
        imgURL: imageURL,
        tags: tags.split(','),
      }
      console.log("add emit button");
      this.newContentEvent.emit(newContent);
    }
  }

  updateContent(id: string, title: string, description: string, type: string, creator: string, imageURL: string, tags: string) : void {
    let updateContent = {
      id: Number(id),
      title: title,
      type: type,
      description: description,
      creator: creator,
      imgURL: imageURL,
      tags: tags.split(','),
    }
    console.log(updateContent);
    this.updateContentEvent.emit(updateContent);
  }

  checkForContentItem(id: number) {
    const exisitingItem = this.contentList.find(item => item.id === id);
    return exisitingItem;
  }

}
