import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from "../../services/project/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Input() message: any;
  @Output() close = new EventEmitter<boolean>(false);
  isEdit: boolean = true;
  createProj: FormGroup;
  // minDate = new Date();
  bsRangeValue: any = [new Date(), new Date()];
  constructor(private project: ProjectService) { }

  ngOnInit() {
    // TODO: Rangevalue
    if (this.message == undefined) {
      this.isEdit = false;
      this.message = [];
      this.message.Name = '';
      this.message.StartDate = '';
      this.message.EndDate = '';
      this.message.Comment = '';
    }
    this.createProj = new FormGroup({
      Id: new FormControl(this.message.Id),
      IsActive: new FormControl(this.message.IsActive),
      Name: new FormControl(this.message.Name),
      StartDate: new FormControl(this.message.StartDate),
      EndDate: new FormControl(this.message.EndDate),
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
      this.project.updateProject(this.createProj.value).subscribe(res => {
        this.close.next(true);
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
