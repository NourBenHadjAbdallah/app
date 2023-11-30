import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Users {
  Name: string;
  LastName: string;
  Post: string;

}

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  
  @Input() collapsed = false;
  @Input() screeWidth = 0;

  canShowearchAsOverlay = false;

  isDropdownOpen = false;


  constructor(private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }
   
  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screeWidth > 768){
      styleClass = "head-trimmed";
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass ;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if(innerWidth < 845) {
      this.canShowearchAsOverlay = true;
    } else {
      this.canShowearchAsOverlay = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    if (!this.isDropdownOpen) {
      return;
    }
    this.isDropdownOpen = false;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
