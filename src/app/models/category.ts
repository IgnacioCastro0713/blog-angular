/* tslint:disable */
export class Category {
  private id: number;
  private name: string;

  constructor(input: any, get: boolean = false) {
    Object.assign(this, input);
  }
}
