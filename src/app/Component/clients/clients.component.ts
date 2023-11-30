import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

export interface Client {
  id: any;
  client_name: string;
  account_number: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  Client: {
    id: any;
    client_name: string;
    account_number: string;
  }={

    id: '',
    client_name: '',
    account_number:''
  };
  

  constructor(private dataService : DataService) { }
   clients: Client[]=[];

   ngOnInit(){
    this.dataService.getClients().subscribe(
      res=>{
        console.log(res);
        this.clients = res;
      },
      err=>{
        console.log(err);
        }
    );
    
  }
}