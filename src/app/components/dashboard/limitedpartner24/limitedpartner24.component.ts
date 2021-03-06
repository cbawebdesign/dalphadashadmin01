import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner24',
    templateUrl: './limitedpartner24.component.html',
    styleUrls: ['./limitedpartner24.component.scss']
})
export class Limitedpartner24Component  {

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