import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipe implements PipeTransform {

  transform(contentList: any, value?: string): Content[] {
    //console.log(value);
    const filteredContentList = contentList.filter((contentListItem: any) => {
      //console.log("contentlistitem typr", contentListItem.type);
      //console.log(value);
      return contentListItem.type === value;
    });
    //console.log(filteredContentList);
    return filteredContentList;
  }
}
