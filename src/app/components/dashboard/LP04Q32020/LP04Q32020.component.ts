import { Component } from '@angular/core';

@Component({
    selector: 'app-LP04Q32020',
    templateUrl: './LP04Q32020.component.html',
    styleUrls: ['./LP04Q32020.component.scss']
})
export class LP04Q32020Component  {

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