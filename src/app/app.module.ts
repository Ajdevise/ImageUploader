import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path: '', component: UploadComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
