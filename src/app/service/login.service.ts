import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic '+ window.btoa(username+':'+password)});
    return this.http.get(environment.hostUrl + "/login", {headers,responseType:'text' as 'json'});
  }

}
