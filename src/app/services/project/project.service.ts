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

  constructor(private httpClient: HttpClient) {
    this.updated.asObservable();
  }

  async getProjects() {
    let headers = this.setHeaders();
    return await this.httpClient.get(`${this.apiUrl}/Projects`, { headers }).toPromise();
  }

  async getProject(id: number) {
    let headers = this.setHeaders();
    return await this.httpClient.get(`${this.apiUrl}/Projects/${id}`, { headers }).toPromise();
  }

  addProject(proj) {
    let headers = this.setHeaders();
    var data = {
      StartDate: proj.StartDate,
      EndDate: proj.EndDate,
      LastModifyDate: new Date().toDateString(),
      Name: proj.Name,
      Comment: proj.Comment,
      IsActive: true
    }
    return this.httpClient.post(`${this.apiUrl}/Projects`, data, { headers });
  }

  updateProject(proj): Observable<any> {
    let headers = this.setHeaders();
    var data = {
      StartDate: new Date(proj.StartDate).toDateString(),
      EndDate: new Date(proj.EndDate).toDateString(),
      LastModifyDate: new Date().toDateString(),
      Name: proj.Name,
      Comment: proj.Comment,
      ProjectId: proj.ProjectId,
      IsActive: true
    }
    return this.httpClient.put(`${this.apiUrl}/Projects/${proj.ProjectId}`, data, { headers });
  }

  deleteProject(id): Observable<any> {
    let headers = this.setHeaders();
    return this.httpClient.post(`${this.apiUrl}/Projects/SetFlag/${id}`, "{}", { headers });
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
