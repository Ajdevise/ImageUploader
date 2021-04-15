import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  id: String = null;

  constructor() {}

  ngOnInit() {}

  getTheId(id: String) {
    this.id = id;
  }
}
