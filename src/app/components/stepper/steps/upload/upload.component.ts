import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

 
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  uploading1: boolean = false;
  uploading2: boolean = false;
  uploading3: boolean = false;
  ready1 = false;
  ready2 = false;
  ready3 = false;

  ready = false;
  readyUpload = true;
  ngOnInit() {
  }

  /**
  * Method to simulate upload
  */
  async upload() {
    this.readyUpload = false;
    this.uploading1 = true;
    this.uploading2 = true;
    this.uploading3 = true;
    interval(5000).subscribe(x => this.uploading1 = false);
    interval(5000).subscribe(x => this.ready1 = true);
    interval(7000).subscribe(x => this.uploading2 = false);
    interval(7000).subscribe(x => this.ready2 = true);
    interval(9000).subscribe(x => this.uploading3 = false);
    interval(9000).subscribe(x => this.ready3 = true);
    interval(9000).subscribe(x => this.ready = true);
  }

  




}
