export class User {
  private id: number;
  private name?: string;
  private surname?: string;
  private email?: string;
  private password?: string;
  private role?: string;
  private description?: string;
  private image?: string;

  constructor(input: any) {
    Object.assign(this, input);
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}
