import { Component } from '@angular/core';

@Component({
    selector: 'app-LP05newsletter',
    templateUrl: './LP05newsletter.component.html',
    styleUrls: ['./LP05newsletter.component.scss']
})
export class LP05newsletterComponent  {


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