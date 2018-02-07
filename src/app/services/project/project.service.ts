import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Project } from '../../models/project';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectService {

  apiUrl: string = "http://localhost:1485/api";
  constructor(private http: HttpClient) { }

  getProjects() {
    let result: any[] = [];
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get(`${this.apiUrl}/Projects`, { headers }).subscribe((res: any[]) => {
      res.forEach(element => {
        result.push(element);
      });
    });
    return result;
  }

  addProject(proj) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    var data = {
      StartDate: proj.DateRange[0],
      EndDate: proj.DateRange[1],
      LastModifyDate: proj.DateRange[0],
      Name: proj.Name,
      Comment: proj.Comment
    }
    return this.http.post(`${this.apiUrl}/Projects`, data, { headers });
  }

  updateProject(proj): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    var data = {
      StartDate: proj.DateRange[0],
      EndDate: proj.DateRange[1],
      LastModifyDate: proj.DateRange[0],
      Name: proj.Name,
      Comment: proj.Comment,
      Id: proj.Id
    }
    return this.http.put(`${this.apiUrl}/Projects/${proj.Id}`, data, {headers});
  }


  deleteProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.apiUrl}/Projects/SetFlag/${id}`, "{}" ,{headers});
  }
}
