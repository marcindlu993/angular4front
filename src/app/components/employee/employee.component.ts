import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { EmployeeModel } from '../../models/employee';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private modalService: BsModalService) { }

  modalRef: BsModalRef;
  headerTable: string[] = ["id", "name", "second name", "maxFTE", "freeFTE"];
  employee: any;
  message: any;
  employeeIndex: number;
  employees: EmployeeModel[] = [];
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  DeleteEmployee(emploId, i) {
    this.employeeService.deleteEmployee(emploId).subscribe(res => {
      this.employees.splice(i, 1);
    });
  }

  setDeleteData(employee, i) {
    this.employee = employee;
    this.employeeIndex = i;
  }

  setUpdateData(employee) {
    this.message = employee;
  }

  openModalConfirm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  openModalEdit(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  }
  closeModal(event) {
    if (event) {
      this.modalRef.hide();
      this.employees = this.employeeService.getEmployees();
    }
  }
  confirmDelete(): void {
    this.DeleteEmployee(this.employee.Id, this.employeeIndex);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}