import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeeService } from "../../services/employee/employee.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  isEdit: boolean = true;
  addEmplo: FormGroup;
  message: any = null;

  constructor(private employee: EmployeeService, public modalRef: BsModalRef) { }

  ngOnInit() {
    if (this.message == undefined) {
      this.isEdit = false;
      this.message = [];
      this.message.Name = '';
      this.message.SecondName = '';
      this.message.MaxFte = '';
    }
    this.addEmplo = new FormGroup({
      EmployeeId: new FormControl(this.message.EmployeeId),
      IsActive: new FormControl(this.message.IsActive),
      Name: new FormControl(this.message.Name, Validators.required),
      SecondName: new FormControl(this.message.SecondName, Validators.required),
      MaxFte: new FormControl(this.message.MaxFte,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(3.0),
          Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")
        ])
    });
  }

  Submit() {
    if (this.isEdit)
      this.UpdateEmployee();
    else
      this.AddEmployee();
  }

  UpdateEmployee() {
    if (this.addEmplo.valid) {
      this.employee.updateEmployee(this.addEmplo.value).subscribe(res => {
        this.employee.refresh(true);
        this.modalRef.hide();
      });
    }
  }

  AddEmployee() {
    if (this.addEmplo.valid) {
      this.employee.addEmployee(this.addEmplo.value).subscribe(res => {
        this.employee.refresh(true);
        this.modalRef.hide();
      });
    }
  }
}
