import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipe implements PipeTransform {

  transform(contentList: Content[],type?:string, ) {
   
    if(type === "Smart Phone" || type === 'Watch' || type=== 'Tablet'){
    return contentList.filter(c => c.type === type ?
    true : false);
    }

    else{
      return contentList;
    };
  }
}
