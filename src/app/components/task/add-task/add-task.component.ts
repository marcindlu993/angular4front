import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  createForm: FormGroup;
  // maxDate = new Date();
  minDate = new Date();
  bsRangeValue: any = [new Date(), new Date()];

  constructor() { }

  ngOnInit() {
    this.createForm = new FormGroup({
      taskName: new FormControl(),
      dateRange: new FormControl(),
      comment: new FormControl()
    });
  }

  AddTask() {
    if (this.createForm.valid) {
      task = new Task
      this.createForm.reset();
    }
  }

}
