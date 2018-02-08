export interface IProjectDTO {
  ProjectId: number;
  Name: string;
  StartDate: Date;
  EndDate: Date;
  LastModifyDate: Date;
  Comment: string;

}
export class ProjectModel {
  ProjectId: number;
  Name: string;
  StartDate: Date;
  EndDate: Date;
  LastModifyDate: Date;
  Comment: string;

  constructor(data: IProjectDTO)
  {
    this.ProjectId = data.ProjectId,
    this.StartDate = data.StartDate, 
    this.EndDate = data.EndDate, 
    this.LastModifyDate = data.LastModifyDate,
    this.Name = data.Name, 
    this.Comment = data.Comment
  }
}
