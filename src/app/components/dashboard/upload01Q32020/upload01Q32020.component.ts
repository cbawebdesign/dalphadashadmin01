

  import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
  import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
  import { AngularFirestore } from '@angular/fire/firestore';
  import { Observable } from 'rxjs';
  import { finalize, tap } from 'rxjs/operators';
  
  @Component({
    selector: 'app-upload01Q32020',
    templateUrl: './upload01Q32020.component.html',
    styleUrls: ['./upload01Q32020.component.scss'],
  })
  export class Upload01Q32020component implements OnInit {
  
    @Input() file: File;
  
    task: AngularFireUploadTask;
  
    percentage: Observable<number>;
    snapshot: Observable<any>;
    downloadURL: string;
  
    constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }
  
    ngOnInit() {
      this.startUpload();
    }
  
    startUpload() {
  
      // The storage path
      const path = `q32020/${Date.now()}_${this.file.name}`;
  
      // Reference to storage bucket
      const ref = this.storage.ref(path);
  
      // The main task
      this.task = this.storage.upload(path, this.file);
  
      // Progress monitoring
      this.percentage = this.task.percentageChanges();
  
      this.snapshot   = this.task.snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize( async() =>  {
          this.downloadURL = await ref.getDownloadURL().toPromise();
  
          this.db.collection('user/t9rA6TuxLwh872xcrJ0udNRcd4t2/q32020Items').add( { downloadURL: this.downloadURL, path });
        }),
      );
    }
  
    isActive(snapshot) {
      return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
  
  }