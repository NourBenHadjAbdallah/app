import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userLogin : any[]=[];
  Login: any={
    username:'',
    password:''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe(
      (response: any) => {
        const user = response.find((user: any) => user.username === username && user.password === password);
        if(user != undefined) {
          alert('User Login Successfully');
          this.router.navigate(['/main']);
        } else {
          alert("Username and Password does not match");
        }
      },
      (error) => {
        console.error(error);
        // Handle error response from the server
      }
    );
  }
}
