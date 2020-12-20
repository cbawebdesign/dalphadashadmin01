import { Component } from '@angular/core';

@Component({
    selector: 'app-LP03newsletter',
    templateUrl: './LP03newsletter.component.html',
    styleUrls: ['./LP03newsletter.component.scss']
})
export class LP03newsletterComponent  {


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