export interface IEmploeesDTO {
  EmployeeId: number;
  Name: string;
  SecondName: string;
  MaxFte: number;
  FreeFte: number;
  IsActive: boolean;
}

export class EmployeeModel {
  EmployeeId: number;
  Name: string;
  SecondName: string;
  MaxFte: number;
  FreeFte: number;

  constructor(data: IEmploeesDTO) {
   this.EmployeeId = data.EmployeeId;
   this.Name = data.Name;
   this.FreeFte = data.FreeFte;
   this.MaxFte = data.MaxFte;
   this.SecondName = data.SecondName;
  }
}
