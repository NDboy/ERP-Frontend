import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  logout(): void {
    environment.authenticatedHeaders = new HttpHeaders();
    this.router.navigate(["/"]);
    this.appComponent.ngOnInit();
  }

}
