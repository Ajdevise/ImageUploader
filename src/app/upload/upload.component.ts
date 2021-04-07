import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit  } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;
  isDraggedOver = false;

  constructor(private fileUploadService: FileUploadService) { }

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
      this.fileUploadService.postFile(this.fileToUpload).subscribe(res => console.log(res), err => alert(err.error));
    } else {
      alert("You have to upload an image");
    }
  }
}