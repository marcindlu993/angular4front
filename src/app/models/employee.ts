export class Employee {
  Id: number;
  Name: string;
  SecondName: string;
  MaxFte: number;
  FreeFte: number;

  constructor(id, name, secondName, maxFte, freeFte)
  {
    this.Id = id,
    this.Name = name, 
    this.SecondName = secondName, 
    this.MaxFte = maxFte, 
    this.FreeFte = freeFte
  }
}
