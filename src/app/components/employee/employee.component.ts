import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { EmployeeModel } from '../../models/employee';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddEmployeeComponent } from "../add-employee/add-employee.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  modalRef: BsModalRef;
  headerTable: string[] = ["id", "name", "second name", "maxFTE", "freeFTE"];
  employee: any;
  employeeIndex: number;
  employees: EmployeeModel[] = [];
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private employeeService: EmployeeService, private modalService: BsModalService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.employeeService.updated.subscribe(res => {
      if (res) {
        this.employees = this.employeeService.getEmployees();
      }
    })
  }

  DeleteEmployee(emploId, i) {
    this.employeeService.deleteEmployee(emploId).subscribe(res => {
      this.employees.splice(i, 1);
    })
  }

  setDeleteData(employee, i) {
    this.employee = employee;
    this.employeeIndex = i;
  }

  openModalConfirm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  openModalEdit(isEdit, employee) {
    const initialState = {
      message: employee,
      isEdit: isEdit
    };
    this.modalRef = this.modalService.show(AddEmployeeComponent, { initialState });
  }

  confirmDelete(): void {
    this.DeleteEmployee(this.employee.EmployeeId, this.employeeIndex);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}