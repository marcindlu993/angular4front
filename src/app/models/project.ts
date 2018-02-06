export class Project {
  Id: number;
  Name: string;
  StartDate: Date;
  EndDate: Date;
  LastModifyDate: Date;
  Comment: string;

  constructor(id, name, startDate, endDate, lastModifyDate, comment)
  {
    this.Id = id,
    this.StartDate = startDate, 
    this.EndDate = endDate, 
    this.LastModifyDate = lastModifyDate,
    this.Name = name, 
    this.Comment = comment
  }
}
