import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee/employee.service";
import { ProjectService } from "../../services/project/project.service";
import { EmployeeModel } from "../../models/employee";
import { ProjectModel } from "../../models/project";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private projectService: ProjectService ) {}
  employeesData: EmployeeModel[] = [];
  projectsData: ProjectModel[] = [];
  employeesToProjectData: EmployeeModel[] = [];

  ngOnInit() {
    this.employeesData = this.employeeService.getEmployees()
    this.projectsData = this.projectService.getProjects();
  }

  

}
