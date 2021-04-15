import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  isDraggedOver = false;
  fileToUpload: File = null;
  loading = false;

  constructor(private fileUploadService: FileUploadService, private router: Router) { }

  ngOnInit() {

  }

  dropImg(e) {
    e.preventDefault();
    this.isDraggedOver = false;
    this.fileToUpload = e.dataTransfer.items[0].getAsFile();
    this.postFiles();
  }

  dragOver(e) {
    e.preventDefault();
    this.isDraggedOver = true;
  }

  dragLeave(e) {
    e.preventDefault();
    this.isDraggedOver = false;
  }

  isImage(file: String) {
    return file.match(/[\/.](jpg|jpeg|png)$/i);
  }

  sendImgToServer(files: FileList) {
    this.fileToUpload = files.item(0);
    this.postFiles();
  }

  postFiles() {
    if(this.isImage(this.fileToUpload.name)) {
      this.loading = true;
      this.fileUploadService.postFile(this.fileToUpload).subscribe((res) => {
        this.loading = false;
        this.router.navigate(['uploaded', res["_id"]]);
      }, err => alert(err.error));
    } else {
      alert("You have to upload an image");
    }
  }
}