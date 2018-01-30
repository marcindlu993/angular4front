import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:HttpClient) { 
    console.log('Data service connected...');
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
