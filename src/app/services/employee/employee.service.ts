import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { EmployeeModel, IEmploeesDTO } from './../../models/employee'
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class EmployeeService {

  apiUrl: string = "http://localhost:1485/api";
  updated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { 
    this.updated.asObservable();
  }

  getEmployees() {
    let result: any[] = [];
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get(`${this.apiUrl}/Employees`, { headers }).subscribe((res: IEmploeesDTO[]) => {
      res.forEach(element => {
        result.push(new EmployeeModel(element));
      });
    });
    return result;
  }

  addEmployee(employee): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    var data = {
      Name: employee.Name,
      SecondName: employee.SecondName,
      MaxFte: employee.MaxFte
    }
    return this.http.post(`${this.apiUrl}/Employees`, data, { headers });
  }

  updateEmployee(employee): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    var data = {
      EmployeeId: employee.EmployeeId,
      IsActive: true,
      Name: employee.Name,
      SecondName: employee.SecondName,
      Comment: employee.Comment
    }
    return this.http.put(`${this.apiUrl}/Employees/${employee.EmployeeId}`, data, { headers });
  }

  deleteEmployee(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/Employees/SetFlag/${id}`, "{}", { headers });
  }

  refresh(value: boolean){
    this.updated.next(value);
  }
}
