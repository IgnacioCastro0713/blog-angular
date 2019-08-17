import {Deserializable} from "./deserializable.model";

export class User implements Deserializable{

  public id: number;
  public name?: string;
  public surname?: string;
  public email?: string;
  public password?: string;
  public role?: string;
  public description?: string;
  public image?: string;

  deserialize(input: any, get: boolean = false): this {
    Object.assign(this, input);
    //this.role = get ? new User().deserialize(input.role) : new User().deserialize(input.role).role;
    return this;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}
