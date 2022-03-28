import { Component, ViewChild } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';
import { Content } from './helper-files/content-interface';
import { MobileServicesService } from './Services/mobile-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';
  contentList: Array<any> = [];
  constructor(private contentService: MobileServicesService) {}
  @ViewChild(ContentListComponent) private contentListComponent!: ContentListComponent;	
  
  addToContentList(newContent: Content): void {
    console.log("add item");
    this.contentService.addContent(newContent).subscribe(newContentFromServer => {
      console.log("New content from server: ", newContentFromServer);
      // more efficient way of getting just 1 new item and adding it to the list
      this.contentList.push(newContentFromServer);
      console.log(this.contentList);
      this.contentListComponent.refreshContentList(this.contentList);
    });
  }
}

