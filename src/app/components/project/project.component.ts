import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { ProjectModel } from '../../models/project';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  headerTable: string[] = ["id", "end date", "name", "author"];
  project: any;
  message: any;
  projectIndex: number;
  modalRef: BsModalRef;
  projects: ProjectModel[] = [];
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private projectService: ProjectService, private modalService: BsModalService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  DeleteProject(projectId, i) {
    this.projectService.deleteProject(projectId).subscribe(res => {
      this.projects.splice(i, 1);
    })
  }

  setDeleteData(project, i) {
    this.project = project;
    this.projectIndex = i;
  }

  setUpdateData(project) {
    this.message = project;
  }

  openModalConfirm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  openModalEdit(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  }

  closeModal(event) {
    if (event) {
      this.modalRef.hide();
      this.projects = this.projectService.getProjects();
    }
  }

  confirmDelete(): void {
    this.DeleteProject(this.project.Id, this.projectIndex);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}
