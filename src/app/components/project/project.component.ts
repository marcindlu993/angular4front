import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private project: ProjectService) { }

  headerTable: string[] = ["id", "end date", "name", "author"];

  projects: Project[] = [];

  ngOnInit() {
    this.projects = this.project.getProjects();
  }

  deleteProject(id)
  {
    this.project.deleteProject(id);
  }
}
