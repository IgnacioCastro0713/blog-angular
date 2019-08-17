export class User {

  private id: number;
  private name?: string;
  private surname?: string;
  private email?: string;
  private password?: string;
  private role?: string;
  private description?: string;
  private image?: string;

  constructor(input: any, get: boolean = false) {
    Object.assign(this, input);
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}

//this.role = get ? new User().deserialize(input.role) : new User().deserialize(input.role).role;
