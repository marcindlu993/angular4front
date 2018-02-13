import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { ProjectModel, IProjectDTO } from '../../models/project';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddProjectComponent } from "../add-project/add-project.component";
import { Router } from "@angular/router";

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

  constructor(private router: Router, private projectService: ProjectService, private modalService: BsModalService) { }


  ngOnInit() {
    // this.projectService.getProjects().then((res: IProjectDTO[]) => {
    //   res.forEach(element => {
    //     this.projects.push(new ProjectModel(element));
    //   });
    // });
    //TODO:
    this.projectService.updated.subscribe(res => {
      this.projectService.getProjects().then((res: IProjectDTO[]) => {
        res.forEach(element => {
          this.projects.push(new ProjectModel(element));
        })
      })
    })
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

  openModalEdit(isEdit, project) {
          const initialState = {
            message: project,
            isEdit: isEdit
          };
          this.modalRef = this.modalService.show(AddProjectComponent, { initialState });
        }

  confirmDelete(): void {
          this.DeleteProject(this.project.ProjectId, this.projectIndex);
          this.modalRef.hide();
        }

  decline(): void {
          this.modalRef.hide();
        }

  openProjectInfo(project) {
          this.router.navigate(['project-info', project.ProjectId]);
        }
}
