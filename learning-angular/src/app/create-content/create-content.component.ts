import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() addme: EventEmitter<Content> = new EventEmitter<Content>();
  errorMessage: string = '';
  

  ngOnInit(): void {

  }
  adddevice(id: string, title: string, description: string, creator: string, imageURL: string, type: string, tags: string): void {
    var newdevice: Content;
    let successFullyAddedDevice = new Promise((resolve, reject) => {
      if (id !== null && title !== '' && description !== '' && creator !== '' && imageURL !== '') {
        newdevice = {
          id: parseInt(id),
          type: type,
          tags: tags.split(","),
          title: title,
          description: description,
          creator: creator,
          imgURL: imageURL,

        };
        this.addme.emit(newdevice);
        alert("new device added");
        var x: string[] = ['id', 'type', 'tags', 'title', 'description', 'creator', 'imageURL'];
        x.forEach(element => {
          var z = document.getElementById(element);
          console.log(z?.innerHTML);
        });
      }
      else {
        reject('Some error');
      }
    });
    successFullyAddedDevice.then((success) => {
      
    })
    .catch(err =>  {
      this.errorMessage = 'User must try to create the content again';
    });

  }
}



