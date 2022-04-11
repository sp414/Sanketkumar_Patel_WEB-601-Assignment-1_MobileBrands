import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DEVICES } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileServicesService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  contentList: Array<any> = [];
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    this.messageService.add('ContentService: "Content array loaded!');
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content> {
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }

  // getContentObs(): Observable<Content[]> {

  //   this.messageService.add('ContentService: "Content array loaded!');
  //   return of(DEVICES);

  // }

  getIDCOntent(id: Number): Observable<Content> {
    return this.http.get<Content>("api/content/" + id);
  }

}
