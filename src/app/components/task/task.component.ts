import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

d:Date = new Date(2000,1,1,1,1,1,1);

headerTable:string[] = ["id", "end date", "name", "author"];
tasks: Task[] = [
  { 
    "id": 1,  "startDate":this.d, "endDate":this.d, "lastModifyDate":this.d, "taskName": "string",  "author": "Duda",  "comment": "string"
  },
  {
    "id": 2,  "startDate":this.d, "endDate":this.d, "lastModifyDate":this.d, "taskName": "string",  "author": "Duda",  "comment": "string"   
  },
  {
    "id": 3,  "startDate":this.d, "endDate":this.d, "lastModifyDate":this.d, "taskName": "string",  "author": "Duda",  "comment": "string"   
  }
];

  constructor() { }

  ngOnInit() {
    
  }

  deleteTask(index:number) {
    this.tasks.splice(index, 1);
  }
}

class Task {

  constructor(
    public id:number,
    public startDate:Date,
    public endDate:Date,
    public lastModifyDate:Date,
    public taskName:string,
    public author:string,
    public comment:string
  ) { }
}