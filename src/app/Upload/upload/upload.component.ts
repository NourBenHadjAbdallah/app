import { formatDate } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  selectedFiles: File[] = [];
  pdfUrl: string | null = null;


  
  constructor( private dataService : DataService) {

  }
  ngOnInit(): void {
    
  }

 /* uploadFile(event: any) {
    const file = event.target.files[0];
    this.dataService.uploadFile(file)
      .subscribe(response => {
        console.log('File uploaded successfully',response);
      }, error => {
        console.error('Error uploading file:', error);
      });
  }*/
  /*onSelectFile(event: any) {
    const file = event?.target.files[0];
    if (file.type !== 'application/pdf') {
      console.error('invalid file type.');
      return;
    }
    
  }*/







 /* uploadFile(){
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('files',this.selectedFile, this.selectedFile.name)
      this.dataService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          console.log('File uploaded successfully!', response);
         
          this.pdfUrl = response.url; 
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
    }
  }*/
  onSelectFile(event: any): void {
    this.selectedFiles= event.target?.files;

    
  }

  uploadFile()  {
    if (this.selectedFiles.length == 0) {
      console.log('No files selected.');
      return;
    }
  
    this.dataService.uploadFile(this.selectedFiles).subscribe(
      event => {
        console.log(event);
        this.reportProgress(event);
      },
      error => {
        console.error(error);
      }
    );
  }
  /*uploadPDF(){
    this.dataService.uploadPDF(this.selectedFile).subscribe(
      (res) => {
        console.log('File uploaded successfully!', res);
      }
    )
  }*/
  private reportProgress(event: any): void {
    // Implement your progress reporting logic here
    console.log('Progress:', event);
  }
}

  
  
  








