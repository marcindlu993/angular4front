export interface IEmploeesDTO {
  EmploeeId: number;
  Name: string;
  SecondName: string;
  MaxFte: number;
  FreeFte: number;
  IsActive: boolean;
}

export class EmployeeModel {
  Id: number;
  Name: string;
  SecondName: string;
  MaxFte: number;
  FreeFte: number;

  constructor(data: IEmploeesDTO) {
   this.Id = data.EmploeeId;
   this.Name = data.Name;
   this.FreeFte = data.FreeFte;
   this.MaxFte = data.MaxFte;
   this.SecondName = data.SecondName;
  }
}
