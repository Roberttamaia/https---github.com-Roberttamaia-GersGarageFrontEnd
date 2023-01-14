import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public appService: AppService) {}
  sigIn() {
    console.log('This is clicked');
    this.appService.GoogleAuth();
  }
}
