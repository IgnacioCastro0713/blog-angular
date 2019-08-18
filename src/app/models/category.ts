export class Category {
  private id: number;
  private name: string;

  constructor(input: any) {
    Object.assign(this, input);
  }
}
