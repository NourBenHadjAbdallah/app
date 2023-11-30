import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent {
  userLogin : any[]=[];
  Login: any={
    email:'',
  };
  constructor(private authService: AuthService, private router: Router) {}
}
