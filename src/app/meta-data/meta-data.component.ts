import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export interface MetaData {
  author: string;
  file_name: string;
  pages: String;
  file_size: String;
  
}

@Component({
  selector: 'app-meta-data',
  templateUrl: './meta-data.component.html',
  styleUrls: ['./meta-data.component.css']
})
export class MetaDataComponent implements OnInit {
  how = false; 
  metaData: { author: string, file_name: string, file_size: String, pages: String}={

    file_name: '',
    author: '',
    pages: '',
    file_size: '',
    
  };

  

  constructor(private dataService : DataService) { }
   metadata: MetaData[]=[];

   ngOnInit(){
    this.dataService.getMetaDataNode().subscribe(
      res=>{
        console.log(res);
        this.metadata = res;
      },
      err=>{
        console.log(err);
        }
    );
      }
}
