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
  newDevice: any = {};
  ngOnInit(): void { }

  adddevice(): void {
    var newdevice = this.newDevice;
    let successFullyAddedDevice = new Promise((resolve, reject) => {
      if (this.newDevice.id !== null && this.newDevice.title !== '' && this.newDevice.description !== '' && this.newDevice.creator !== '' && this.newDevice.imgURL !== '') {
        newdevice = {
          id: parseInt(this.newDevice.id),
          type: this.newDevice.type,
          tags: this.newDevice.tags.split(","),
          title: this.newDevice.title,
          description: this.newDevice.description,
          creator: this.newDevice.creator,
          imgURL: this.newDevice.imgURL,

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

    }).catch(err => {
      this.errorMessage = 'User must try to create the content again';
    });
  }
}


