import { Component, OnInit } from '@angular/core';
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

export interface Transaction {
  TransactionID: any;
  Date: string;
  Description: string;
  Credit: number;
  Debit: number;
}

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {
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

transaction: {TransactionID: number, Date: string, Description: string, Credit: number, Debit: number } = {
  TransactionID: 0,
  Date: '',
  Description: '',
  Credit: 0,
  Debit: 0
};

constructor(private dataService : DataService) { }
   data: Data[]=[];
   transactions: Transaction[]=[];
 

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
    this.dataService.getTransactions().subscribe(
      res=>{
        console.log(res);
        this.transactions = res;
      },
      err=>{
        console.log(err);
        }
    );

    
  }

  


}

