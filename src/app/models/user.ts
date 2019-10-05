export class User {

  public id: number;
  public name: string;
  public surname: string;
  public email: string;
  public password: string;
  public role: string;
  public description: string;
  public image: string;

  constructor(input: any) {
    Object.assign(this, input);
  }

  getFullName(): string {
    return this.name + ' ' + this.surname;
  }
}
