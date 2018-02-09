import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { IProjectDTO, ProjectModel } from '../../models/project';
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class ProjectService {

  apiUrl: string = "http://localhost:1485/api";
  updated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.updated.asObservable();
   }

  getProjects() {
    let result: any[] = [];
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get(`${this.apiUrl}/Projects`, { headers }).subscribe((res: IProjectDTO[]) => {
      res.forEach(element => {
        result.push(new ProjectModel(element));
      });
    });
    return result;
  }
  addProject(proj) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    var data = {
      StartDate: proj.StartDate,
      EndDate: proj.EndDate,
      LastModifyDate: new Date().toDateString(),
      Name: proj.Name,
      Comment: proj.Comment,
      IsActive: true
    }
    return this.http.post(`${this.apiUrl}/Projects`, data, { headers });
  }

  updateProject(proj): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    var data = {
      StartDate: new Date(proj.StartDate).toDateString(),
      EndDate: new Date(proj.EndDate).toDateString(),
      LastModifyDate: new Date().toDateString(),
      Name: proj.Name,
      Comment: proj.Comment,
      ProjectId: proj.ProjectId,
      IsActive: true
    }
    return this.http.put(`${this.apiUrl}/Projects/${proj.ProjectId}`, data, {headers});
  }


  deleteProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.apiUrl}/Projects/SetFlag/${id}`, "{}" ,{headers});
  }

  refresh(value: boolean) {
    this.updated.next(value);
  }
}
