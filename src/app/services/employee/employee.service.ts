import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { EmployeeModel, IEmploeesDTO } from './../../models/employee'
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class EmployeeService {

  apiUrl: string = "http://localhost:1485/api";
  updated = new BehaviorSubject<boolean>(false);

  constructor(private HttpClient: HttpClient) {
    this.updated.asObservable();
  }

  getEmployees() {
    let result: any[] = [];
    let headers = this.setHeaders();
    this.HttpClient.get(`${this.apiUrl}/Employees`, { headers }).subscribe((res: IEmploeesDTO[]) => {
      res.forEach(element => {
        result.push(new EmployeeModel(element));
      });
    });
    return result;
  }

  addEmployee(employee): Observable<any> {
    let headers = this.setHeaders();
    var data = {
      Name: employee.Name,
      SecondName: employee.SecondName,
      MaxFte: employee.MaxFte
    }
    return this.HttpClient.post(`${this.apiUrl}/Employees`, data, { headers });
  }

  updateEmployee(employee): Observable<any> {
    let headers = this.setHeaders();
    var data = {
      EmployeeId: employee.EmployeeId,
      IsActive: true,
      Name: employee.Name,
      SecondName: employee.SecondName,
      Comment: employee.Comment
    }
    return this.HttpClient.put(`${this.apiUrl}/Employees/${employee.EmployeeId}`, data, { headers });
  }

  deleteEmployee(id): Observable<any> {
    let headers = this.setHeaders();
    return this.HttpClient.post(`${this.apiUrl}/Employees/SetFlag/${id}`, "{}", { headers });
  }

  refresh(value: boolean) {
    this.updated.next(value);
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
