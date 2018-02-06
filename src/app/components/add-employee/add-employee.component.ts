import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeeService } from "../../services/employee/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmplo: FormGroup;
  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.addEmplo = new FormGroup({
      Name: new FormControl('',Validators.required),
      SecondName: new FormControl('',Validators.required),
      MaxFte: new FormControl('',
      [
        Validators.required, 
        Validators.min(0), 
        Validators.max(3.0), 
        Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")
      ])
    });
  }

  AddEmployee() {
    if (this.addEmplo.valid) {
      console.log("form submit", this.addEmplo.value);
      this.employee.addEmployee(this.addEmplo.value).subscribe(res =>{
        console.log(res);
      });
    }
  }
}
