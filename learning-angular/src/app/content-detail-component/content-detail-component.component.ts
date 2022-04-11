import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';
import { MobileServicesService } from '../Services/mobile-services.service';

@Component({
  selector: 'app-content-detail-component',
  templateUrl: './content-detail-component.component.html',
  styleUrls: ['./content-detail-component.component.scss']
})
export class ContentDetailComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private contentListService: MobileServicesService,
    private messageService: MessageService) { }
  contentDetail!: Content;
  ngOnInit(): void {
    let id = 0;
    this.route.paramMap.subscribe((params) => {
      id = Number(params.get('id'))
    });
    this.contentListService.getIDCOntent(id).subscribe((content) => {
      console.log(content);
      this.contentDetail = content;
      this.messageService.add(`Content detail fetched with id ${content.id} and title ${content.title}`);
    });
  }

}
