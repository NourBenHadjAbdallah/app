import { Component } from '@angular/core';
import { DataService } from '../data.service';

export interface Data {
  Agency:any
  AccountNumber: any,
  BankNumber:any,
  AccountType: string,
  AccountCurrency: string,
  StatmentDate: String,
  CustomerName:String,
  CustomerAddress: string,
  ClosingBalance: any
  OpeningBalance: any,
  StatementDate:any
}


@Component({
  selector: 'app-parsed-data',
  templateUrl: './parsed-data.component.html',
  styleUrls: ['./parsed-data.component.css']
})
export class ParsedDataComponent {



  mydata: {

    Agency:any
    AccountNumber: any,
    BankNumber:any,
    AccountType: string,
    AccountCurrency: string,
    StatmentDate: String,
    CustomerName:String,
    CustomerAddress: string,
    ClosingBalance: any
    OpeningBalance: any,
    StatementDate:any

  }={
    Agency:'',
    AccountNumber: '',
    BankNumber:'',
    AccountType: '',
    AccountCurrency: '',
    StatmentDate: '',
    CustomerName:'',
    CustomerAddress: '',
    ClosingBalance: '',
    OpeningBalance: '',
    StatementDate:''
  
};

constructor(private dataService : DataService) { }
   data: Data[]=[];
 

   ngOnInit(){
    this.dataService.getData().subscribe(
      res=>{
        console.log(res);
        this.data = res;
      },
      err=>{
        console.log(err);
        }
    );

    
  }
  


}
