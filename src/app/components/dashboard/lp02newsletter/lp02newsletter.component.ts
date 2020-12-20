import { Component } from '@angular/core';

@Component({
    selector: 'app-LP02newsletter',
    templateUrl: './LP02newsletter.component.html',
    styleUrls: ['./LP02newsletter.component.scss']
})
export class LP02newsletterComponent  {

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