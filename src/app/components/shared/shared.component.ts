import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  menuLeft: any[] = [
    { 
      "name": "Tasks", "id": "0", "icon": "assignment", 
    },
    {
      "name": "Employers", "id": "0", "icon": "accessibility"
    },
    {
      "name": "Settings", "id": "0", "icon": "build"
    },
    {
      "name": "Logs", "id": "0", "icon": "announcement"
    },
    {
      "name": "About", "id": "0", "icon": "favorite"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.menuLeft;
  }

}
