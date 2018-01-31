import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  menuLeft: any[] = [
    { 
      "name": "Tasks", "id": "0", "icon": "assignment", "route": ""
    },
    {
      "name": "Employees", "id": "0", "icon": "accessibility", "route": "employees"
    },
    {
      "name": "Settings", "id": "0", "icon": "build", "route": "employees"
    },
    {
      "name": "Logs", "id": "0", "icon": "announcement", "route": "employees"
    },
    {
      "name": "About", "id": "0", "icon": "favorite", "route": "employees"
    }
  ];

  constructor(private router: Router) { }

  goRoute(routeString: string) {
    console.log(routeString);
    this.router.navigate([routeString]);
  }

  ngOnInit() {
    this.menuLeft;
  }

}
