import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from "../../services/project/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  createProj: FormGroup;
  // maxDate = new Date();
  minDate = new Date();
  bsRangeValue: any = [new Date(), new Date()];

  constructor(private project: ProjectService) { }

  ngOnInit() {
    this.createProj = new FormGroup({
      Name: new FormControl(),
      DateRange: new FormControl(),
      Comment: new FormControl()
    });
  }

  AddProject() {
    if (this.createProj.valid) {
      console.log(this.createProj.value);
      this.project.addProject(this.createProj.value).subscribe(res => {
        console.log(res)
      });
    }
  }
}
