import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

export interface Transaction {
  TransactionID: any;
  Date: string;
  Description: string;
  Credit: number;
  Debit: number;
}
export interface MetaData {
  Author: string;
  FileName: string;
  FilePages: String;
  FileSize: String;
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/';
  private apiUrl2 = 'http://localhost:8080/';

  
  
  constructor(private http: HttpClient) { }

  transactions : Transaction[]=[];
  

  getClients() {
    return this.http.get<any[]>(this.apiUrl + 'clients/get');
  }
  getTransactions() {
    return this.http.get<any[]>(this.apiUrl + 'transactions/get');
  }
  getClientTransactions() {
    return this.http.get<any[]>(this.apiUrl + 'statment/client')
  }
  deleteTransaction(TransactionID : any) {
    return this.http.delete(this.apiUrl + 'transactions/delete/'+ TransactionID);
  }
  createTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'transaction', transaction);
  }
  editTransaction(Transaction: Transaction): Observable<any>{
    return this.http.post<any>(this.apiUrl + 'transactions/'+ Transaction.TransactionID, this.transactions);
  }
  getMetaData()  {
    return this.http.get<any[]>(this.apiUrl2 + 'metadata');
  }
  getMetaDataNode() {
    return this.http.get<any[]>(this.apiUrl + 'metadata');
  }
    
  getData(){
    return this.http.get<any[]>(this.apiUrl + 'data');
  }
  

  getUsers() {
    return this.http.get<any[]>(this.apiUrl + 'users');
  }

  getBankStatement(){
    return this.http.get<any[]>(this.apiUrl+ 'bankstatement');
  }
  getFields(){
    return this.http.get<any[]>(this.apiUrl+ 'fields');
  }
  getfiles(){
    return this.http.get<any[]>(this.apiUrl+ 'files');
  }


  uploadFile(files: File[]) {
    const formData = new FormData();
    formData.append('files', files[0], files[0].name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'files'
      })
      
    };

    return this.http.post<any>(this.apiUrl2 + 'file/upload', formData, httpOptions);
  }

/*uploadPDF(file: File){
  return this.http.post<any>(this.apiUrl2 + 'pdf' ,file );

}

upload(formData: FormData): Observable<HttpEvent<string[]>> {
  return this.http.post<string[]>(`${this.apiUrl2}file/upload`, formData, {
    reportProgress: true,
    observe: 'events'
  });
}

// define function to download files
download(filename: string): Observable<HttpEvent<Blob>> {
  return this.http.get(`${this.apiUrl2}file/download/${filename}/`, {
    reportProgress: true,
    observe: 'events',
    responseType: 'blob'
  });
}*/

}