import { Content } from '../helper-files/content-interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MobileServicesService } from '../Services/mobile-services.service';

@Component({
  selector: 'app-modify-content-list',
  templateUrl: './modify-content-list.component.html',
  styleUrls: ['./modify-content-list.component.scss']
})
export class ModifyContentListComponent implements OnInit {

  constructor(private contentListService: MobileServicesService) { }
  newContent?: Content;
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  ngOnInit(): void {
  }

  addContent(title: string, description: string, type: string, creator: string, imageURL: string, tags: string): void {
    this.newContent = {
      title: title,
      type: type,
      description: description,
      creator: creator,
      imgURL: imageURL,
      tags: tags.split(','),
    }
    this.newContentEvent.emit(this.newContent);
  }
}
