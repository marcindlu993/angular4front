import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../account/login/login.component';
import { AccountService } from "../../services/account/account.service";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  userName: string;
  menuLeft: any[] = [
    {
      "name": "Projects", "id": "0", "icon": "assignment", "route": ""
    },
    {
      "name": "Employees", "id": "0", "icon": "accessibility", "route": "employees"
    },
    {
      "name": "Operations", "id": "0", "icon": "folder", "route": "operation"
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
  modalRef: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.menuLeft;
  }

  goRoute(routeString: string) {
    this.router.navigate([routeString]);
  }

  openLoginModal() {
    const initialState = {

    };
    this.modalRef = this.modalService.show(LoginComponent, { initialState });
  }

  logOut() {
    let some = this.accountService.logOutFromService();
  }

  isLogin() {
    if (window.localStorage.getItem("authorizationDataUserName").length > 0){
      this.userName = window.localStorage.getItem("authorizationDataUserName").split("@", 1).toString();
      return true;
    }
    else
      return false;
  }
}
