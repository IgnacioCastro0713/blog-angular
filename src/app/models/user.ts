/* tslint:disable */
export class User {
  constructor(
    public id: number = null,
    public name?: string,
    public email?: string,
    public password?: string,
    public surname?: string,
    public role?: string,
    public description?: string,
    public image?: string
  ) {}
}
