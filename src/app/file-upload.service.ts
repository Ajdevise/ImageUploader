import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File): Observable<Object> {
    const endpoint = "http://127.0.0.1:3000/upload";
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload);
    return this.http.post(endpoint, formData);
  }
}
