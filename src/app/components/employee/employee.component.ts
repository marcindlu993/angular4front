import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employee: EmployeeService) { }
  
  headerTable: string[] = [ "id", "name", "second name", "maxFTE", "freeFTE"];

  employees: Employee[] = [];

  ngOnInit() {
    this.employees = this.employee.getEmployees();
  }
}