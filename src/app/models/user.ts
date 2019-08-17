export class User {

  public id: number;
  public name?: string;
  public surname?: string;
  public email?: string;
  public password?: string;
  public role?: string;
  public description?: string;
  public image?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  public getFullName() {
    return this.name + ' ' + this.surname;
  }
}
