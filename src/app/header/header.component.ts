import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

adm = true;

constructor(private router: Router){}

  navigateToAboutUs() {
    this.router.navigate(['about-us']);
  }

  navigateToDashboard(){
    this.router.navigate(['dashboard']);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateToContact(){
    this.router.navigate(['contact']);
  }
}
