import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

export interface BankStatement {
  id: any;
  file_name: string;
  file_url: string;
}


@Component({
  selector: 'app-bank-statement-data',
  templateUrl: './bank-statement-data.component.html',
  styleUrls: ['./bank-statement-data.component.css']
})
export class BankStatementDataComponent {

  BankStatement: {
    id: any;
    file_name: string;
    file_url: string;
  }={

    id: '',
    file_name: '',
    file_url:''
  };
  

  constructor(private dataService : DataService, private router: Router) { }
   bankStatements: BankStatement[]=[];

   ngOnInit(){
    this.dataService.getfiles().subscribe(
      res=>{
        console.log(res);
        this.bankStatements = res;
      },
      err=>{
        console.log(err);
        }
    );
    
  }
  redirectToPage() {
    this.router.navigate(['/alldata']); // Replace '/destination' with your desired route path
  }
}
