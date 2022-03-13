import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DEVICES } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
//import { MessageService } from '../message.service';
@Injectable({
  providedIn: 'root'
})
export class MobileServicesService {

 // constructor(private messageService: MessageService) { }

  getContent(): Content[] { 
    return DEVICES;
  }

  getContentObs(): Observable<Content[]> { 
  //  this.messageService.add('ContentService: fetched Devices'); 
  return of(DEVICES);

  }
  
  getIDCOntent(id:Number): Observable<Content[]> {
    const filteredDevice = DEVICES.filter(device => {
      return device.id === Number(id);
    });
    return of(filteredDevice);
  }  
}
