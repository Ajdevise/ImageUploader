import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @ViewChild("submit", { static: true }) submitBtn: ElementRef;
  form: FormGroup;
  isDraggedOver = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      file: []
    })
  }

  submitImage() {
    if(this.isImage(this.form.value.file)) {
      this.submitBtn.nativeElement.click();
    } else {
      alert("Only images allowed");
    }
  }

  dropImg(e) {
    e.preventDefault();
    this.isDraggedOver = false;
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

  submitForm() {
    console.log("submitted");
  }
}

// console.log(e.dataTransfer.items[0].getAsFile());
