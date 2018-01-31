import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  headerTable: string[] = [ "id", "name", "second name", "maxTFE", "freeTFE", "projects"]
  employees: any[] = [
    {
      "id": "0", "name": "Piotr", "secondName": "Żyła", "maxTFE": 1, "freeTFE": 0.5, "projects": 1
    },
    {
      "id": "2", "name": "Andrzej", "secondName": "Duda", "maxTFE": 1, "freeTFE": 0, "projects": 2
    },
    {
      "id": "1", "name": "Kamil", "secondName": "Stoch", "maxTFE": 1.5, "freeTFE": 0.3, "projects": 12
    }
  ]

  ngOnInit() {
  }

}
