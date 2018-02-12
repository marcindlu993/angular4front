import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AccountService {

  url: string = "http://localhost:1485";

  constructor(private httpClient: HttpClient) { }

  loginToService(data) {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = `grant_type=password&username=${data.UserName}&password=${data.Password}`;
    return this.httpClient.post(`${this.url}/token`, body, { headers });
  }

  logOutFromService() {
    let headers = this.setHeaders();
    window.localStorage.setItem("authorizationDataToken", "");
    window.localStorage.setItem("authorizationDataUserName", "");
  }

  setHeaders() {
    let headersJson = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem("authorizationDataToken")
    }
    let headers = new HttpHeaders(headersJson);
    return headers;
  }
}
