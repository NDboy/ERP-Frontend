import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage = 'Wrong user name or password!';
  successMessage: string = '';
  invalidLogin = false;
  loginSuccess = false;

  constructor(private loginService: LoginService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  doLogin() {
    let response = this.loginService.login(this.username, this.password);
    response.subscribe(data => {
      environment.authenticatedHeaders = new HttpHeaders({Authorization: 'Basic '+ window.btoa(this.username + ':' + this.password)})
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      this.router.navigate(["/home"]);
      this.appComponent.reload();
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}
