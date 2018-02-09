import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AccountService {

  url: string = "http://localhost:1485";

  constructor(private http: HttpClient) { }

  loginToService(data) {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = `grant_type=password&username=${data.UserName}&password=${data.Password}`;
    return this.http.post(`${this.url}/token`, body, { headers });
  }
}
