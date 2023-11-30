import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

export interface Transaction {
  TransactionID: any;
  Date: string;
  Description: string;
  Credit: number;
  Debit: number;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  show = false; 

  transaction: {TransactionID: number, Date: string, Description: string, Credit: number, Debit: number } = {
    TransactionID: 0,
    Date: '',
    Description: '',
    Credit: 0,
    Debit: 0
  };

  constructor(private dataService : DataService) { }
   transactions: Transaction[]=[];

  
  ngOnInit(){
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
  editTransaction(transaction: Transaction){
    transaction.Description = 'Updated transaction';

    this.dataService.editTransaction(transaction).subscribe(
      res => {
        console.log(res);
        // Refresh the transaction list after successful update
      },
      err => {
        console.log(err);
      }
    );
  }
  createTransaction() {
    console.log(this.transaction);
    this.dataService.createTransaction(this.transaction).subscribe(res => {
      console.log(res);
      alert('transaction been created');
    });
  }

  deleteTransaction(TransactionID:any){
    this.dataService.deleteTransaction(TransactionID).subscribe(
     (res) => {
       console.log('Transaction deleted successfully');
       alert('Transaction deleted successfully');
     },
     (error) => {
       console.error('Error deleting transaction:', error);
     }
   );
 }

}