import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export interface fields {
  fields:String;
  Type:String;
}

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit{

  Fields :{fields:String, Type:String}={
  fields:'',
  Type:''};
  
  constructor(private dataService : DataService) { }
  Fileds: fields[]=[];

  ngOnInit(){
   this.dataService.getFields().subscribe(
     res=>{
       console.log(res);
       this.Fileds = res;
     },
     err=>{
       console.log(err);
       }
   );
     }


    

}
