import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertModule } from 'ngx-bootstrap/alert';

import { EmployeeService } from './services/employee/employee.service';
import { ProjectService } from './services/project/project.service';
import { AccountService } from "./services/account/account.service";

import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectComponent } from './components/project/project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { OperationComponent } from './components/operation/operation.component';
import { LoginComponent } from './components/account/login/login.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'operation', component: OperationComponent },
  { path: 'project-info/:id', component: ProjectInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    SharedComponent,
    EmployeeComponent,
    AddProjectComponent,
    AddEmployeeComponent,
    OperationComponent,
    LoginComponent,
    ProjectInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    [CollapseModule],
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [EmployeeService, ProjectService, BsModalRef, AccountService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule { }

