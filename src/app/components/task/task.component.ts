import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

person:Person;
tab:string[];
users:User[];
d:Date = new Date(2000,1,1,1,1,1,1)
headerTable:string[] = ["id", "start date", "end date", "last modify date", "Name", "author"]
tasks: any[] = [
  { 
    "id": "1",  "startDate": this.d,  "endDate":this.d, "lastModifyDate":this.d, "taskName": "string",  "author": "Duda",  "comment": "string" 
  },
  {
    "id": "2",  "startDate":this.d, "endDate":this.d, "lastModifyDate":this.d, "taskName": "string",  "author": "Duda",  "comment": "string"   
  },
  {
    "id": "3",  "startDate":this.d, "endDate":this.d, "lastModifyDate":this.d, "taskName": "string",  "author": "Duda",  "comment": "string"   
  }
];

  constructor(private dataService:DataService) { 
    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.person = {
      name: "Marcin",
      secondName: "Hehe"
    }
    this.tab = ['mla','bla','ble'];

    this.dataService.getUsers().subscribe((users) => {
      console.log(users);
      users = users;
    });
  }

  onClick(){
    console.log("HEHEHAHA");
  }

  addLaugh(laugh){
    console.log(laugh);
    this.tab.push(laugh);
    return false;
  }

  deleteLaugh(position){
    console.log(position);
        this.tab.splice(position, 1);
  }

  // userEdit(user){
  //   console.log("editing...")
  //     this.users
  // }
}

interface Person {
  name:string;
  secondName:string;
}

interface User {
  id:number;
  name:string;
  username:string;
  email:string;
}

interface Task {
  id:number;
  startDate:Date;
  endDate:Date;
  lastModifyDate:Date;
  taskName:string;
  author:string;
  comment:string;
}