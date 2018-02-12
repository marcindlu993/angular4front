import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl } from "@angular/forms";
import { AccountService } from "../../../services/account/account.service";
import { IUser } from "../../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logTo: FormGroup;
  constructor(private accountService: AccountService, public modalRef: BsModalRef) { }

  ngOnInit() {
    this.logTo = new FormGroup({
      UserName: new FormControl(''),
      Password: new FormControl('')
    })
  }

  Submit() {
    this.accountService.loginToService(this.logTo.value).subscribe((res: IUser) => {
      this.modalRef.hide();
      window.localStorage.setItem('authorizationDataToken', res.access_token);
      window.localStorage.setItem('authorizationDataUserName', res.userName);
    })
  }
}
