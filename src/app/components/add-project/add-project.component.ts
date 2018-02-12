import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from "../../services/project/project.service";
import { BsModalRef } from "ngx-bootstrap";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  isEdit: boolean = true;
  createProj: FormGroup;
  message: any = null;
  constructor(private project: ProjectService, public modalRef: BsModalRef) { }

  ngOnInit() {
    if (this.message == undefined) {
      this.isEdit = false;
      this.message = [];
      this.message.Name = '';
      this.message.StartDate = '';
      this.message.EndDate = '';
      this.message.Comment = '';
    }
    this.createProj = new FormGroup({
      ProjectId: new FormControl(this.message.ProjectId),
      IsActive: new FormControl(this.message.IsActive),
      Name: new FormControl(this.message.Name),
      StartDate: new FormControl(this.message.StartDate),
      EndDate: new FormControl(this.message.EndDate),
      LastModifyDate: new FormControl(this.message.LastModifyDate),
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
        this.project.refresh(true);
        this.modalRef.hide();
      })
    }
  }

  AddProject() {
    if (this.createProj.valid) {
      this.project.addProject(this.createProj.value).subscribe(res => {
        this.project.refresh(true);
        this.modalRef.hide();
      })
    }
  }
}
