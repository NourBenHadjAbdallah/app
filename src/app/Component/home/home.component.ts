import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  username: string='';

  constructor(private authService: AuthService, private router: Router) {}
 
 

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  } 
  /*ngOnInit() {
    this.authService.getUsername().then(username => {
      this.username = username;
    });
  }*/

}