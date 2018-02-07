import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class EmployeeService {

  apiUrl: string = "http://localhost:1485/api";

  constructor(private http: HttpClient) { }

  getEmployees() {
    let result: any[] = [];
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get(`${this.apiUrl}/Employees`, { headers }).subscribe((res: any[]) => {
      res.forEach(element => {
        result.push(element);
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
      Id: employee.Id,
      IsActive: employee.IsActive,
      Name: employee.Name,
      SecondName: employee.SecondName,
      Comment: employee.Comment
    }
    return this.http.put(`${this.apiUrl}/Employees/${employee.Id}`, data, { headers });
  }

  deleteEmployee(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/Employees/SetFlag/${id}`, "{}", { headers });
  }
}
