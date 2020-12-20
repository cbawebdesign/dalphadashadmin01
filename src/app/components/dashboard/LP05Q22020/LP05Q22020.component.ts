import { Component } from '@angular/core';

@Component({
    selector: 'app-LP05Q22020',
    templateUrl: './LP05Q22020.component.html',
    styleUrls: ['./LP05Q22020.component.scss']
})
export class LP05Q22020Component  {

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