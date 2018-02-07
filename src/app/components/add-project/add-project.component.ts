import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from "../../services/project/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Input() message: any;
  isEdit: boolean = true;
  createProj: FormGroup;
  minDate = new Date();
  bsRangeValue: any = [new Date(), new Date()];

  constructor(private project: ProjectService) { }

  ngOnInit() {
        if(this.message == undefined)
      {
        this.isEdit = false;
        this.message = [];
        this.message.Name = '';
        this.message.DateRange = '';
        this.message.Comment = '';
      }
    this.createProj = new FormGroup({
      Id: new FormControl(this.message.Id),
      IsActive: new FormControl(this.message.IsActive),
      Name: new FormControl(this.message.Name),
      DateRange: new FormControl(this.message.DateRange),
      Comment: new FormControl(this.message.Comment)
    });
  }

  Submit() {
    if (this.isEdit)
      this.UpdateProject();
    else
      this.AddProject();
  }

  UpdateProject() {
    if (this.createProj.valid) {
      this.project.updateProject(this.createProj.value).subscribe(res =>{
      });
    }
  }

  AddProject() {
    if (this.createProj.valid) {
      this.project.addProject(this.createProj.value).subscribe(res => {
      });
    }
  }
}
