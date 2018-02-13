import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { ProjectService } from '../../services/project/project.service';
import { EmployeeModel } from '../../models/employee';
import { ProjectModel } from '../../models/project';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  employeesData: EmployeeModel[] = [];
  projectsData: ProjectModel[] = [];
  employeesInProjectData: EmployeeModel[] = [];
  modalRef: BsModalRef;
  employeeToRemoveFromProject: EmployeeModel = null;
  idEmployeeArray: number = null;

  constructor(private employeeService: EmployeeService, private projectService: ProjectService, private modalService: BsModalService) { }

  ngOnInit() {
    this.employeesData = this.employeeService.getEmployees()
    this.projectsData = this.projectService.getProjects();
  }

  addToProject(employee, id) {
    this.employeesInProjectData.push(employee);
    this.employeesData.splice(id, 1);
  }

  openRemoveModal(confirmRemove: TemplateRef<any>, employee, id) {
    this.employeeToRemoveFromProject = employee;
    this.idEmployeeArray = id;
    console.log(this.employeeToRemoveFromProject, this.idEmployeeArray);
    this.modalRef = this.modalService.show(confirmRemove, {class: 'modal-sm'});
  }

  confirm() {
    this.removeFromProject(this.employeeToRemoveFromProject, this.idEmployeeArray);
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }

  removeFromProject(employee, id) {
    this.employeesInProjectData.splice(id, 1);
    this.employeesData.push(employee);
  }

}
