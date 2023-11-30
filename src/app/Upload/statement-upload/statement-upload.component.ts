import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-statement-upload',
  templateUrl: './statement-upload.component.html',
  styleUrls: ['./statement-upload.component.css']
})
export class StatementUploadComponent {


  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post<any>('http://localhost:3000/upload', formData)
        .subscribe(
          (response) => {
            console.log('File uploaded successfully!', response);
          },
          (error) => {
            console.error('Error occurred during file upload:', error);
          }
        );
    } else {
      console.error('No file selected!');
    }
  }

}