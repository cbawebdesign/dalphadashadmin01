import { Component } from '@angular/core';

@Component({
    selector: 'app-LP01newsletter',
    templateUrl: './LP01newsletter.component.html',
    styleUrls: ['./LP01newsletter.component.scss']
})
export class LP01newsletterComponent  {


  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }


}