export class Category {
  public id: number;
  public name: string;

  constructor(input: any) {
    Object.assign(this, input);
  }
}
