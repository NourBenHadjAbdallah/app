import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl='http://localhost:3000/';
  name: string = "";
  surname:string="";
  userName:string="";
  password: string = '';
  role:any;
  roles: any[] = [];
  token: any;
  private isLoggedIn: boolean = false;
  userId!: number;
  email!: string;
 

  constructor(
    private httpClient:HttpClient,
    private router: Router,
    private localStorage:LocalStorageService
  ) { }

  login(username: string, password: string){
    return this.httpClient.get(this.apiUrl + 'auth')
  }
  logout() {
  
    this.localStorage.clear()
    this.onRefresh();
    this.router.navigate(['/login']);
}

  isAuthenticated(){
    if(this.localStorage.getItem("token")){
      return true;
    }
    else{
      return false
    }
  }



  async onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
    const currentUrl = this.router.url + '?'
    return this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false
      this.router.navigate([this.router.url])
    })
  }
  getCurrentUserId():number {
    return this.userId
  }
  
  /*getUsername(): Promise<String> {
    return this.httpClient.get(this.apiUrl).toPromise();
  }*/
}
