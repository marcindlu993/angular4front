import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from "../../services/project/project.service";
import { ProjectModel, IProjectDTO } from "../../models/project";

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  projectIdRoute: number;
  private sub: any;
  project: ProjectModel;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.projectIdRoute = +params['id'];
    });
    await this.projectService.getProject(this.projectIdRoute).then((res: IProjectDTO) => {
      this.project = new ProjectModel(res);
    })
  }

}
