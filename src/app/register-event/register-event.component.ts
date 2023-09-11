import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent {
  constructor(private router: Router){}

  navigateToDashboard(){
    this.router.navigate(['dashboard']);
  }
}
