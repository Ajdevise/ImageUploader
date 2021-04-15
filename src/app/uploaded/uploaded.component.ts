import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.scss']
})
export class UploadedComponent implements OnInit {
  private endpoint = "http://127.0.0.1:3000/upload/";
  link: string;
  id: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.link = this.endpoint + this.id; 
    })
  }

  changeText(button: HTMLButtonElement) {
    button.textContent = "Copied!";
  }

  getWidth(paragraph: HTMLParagraphElement) {
    console.log(paragraph);
  }
}
