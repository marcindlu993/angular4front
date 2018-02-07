import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeeService } from "../../services/employee/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() message: any;
  isEdit: boolean = true;
  addEmplo: FormGroup;
  
  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    if(this.message == undefined)
      {
        this.isEdit = false;
        this.message = [];
        this.message.Name = '';
        this.message.SecondName = '';
        this.message.MaxFte = '';
      }
    this.addEmplo = new FormGroup({
      Id: new FormControl(this.message.Id),
      IsActive: new FormControl(this.message.IsActive),
      Name: new FormControl(this.message.Name,Validators.required),
      SecondName: new FormControl(this.message.SecondName,Validators.required),
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
    // this.modalRef.hide();
    // this.modalRef = null;
  }

  UpdateEmployee() {
    if (this.addEmplo.valid) {
      this.employee.updateEmployee(this.addEmplo.value).subscribe(res =>{
      });
    }
  }

  AddEmployee() {
    if (this.addEmplo.valid) {
      this.employee.addEmployee(this.addEmplo.value).subscribe(res =>{
      });
    }
  }
}
