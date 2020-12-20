import { Component } from '@angular/core';

@Component({
    selector: 'app-LP02Q32020',
    templateUrl: './LP02Q32020.component.html',
    styleUrls: ['./LP02Q32020.component.scss']
})
export class LP02Q32020Component  {

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