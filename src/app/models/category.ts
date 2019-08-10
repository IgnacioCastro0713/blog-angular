/* tslint:disable */
export class Category {

  private static instance: Category;

  constructor(
    public id: number,
    public name: string
  ) {}

  public static get(event: Category) {

    if (!this.instance) {
      this.instance = new Category(event.id, event.name)
    }

    return this.instance
  }

  public static data(event: Category) {
    return this.get(event)
  }

}
