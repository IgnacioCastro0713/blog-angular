import { User } from './user';
import { Category } from './category';

export class Post {
  public id: number;
  public user_id: User | number;
  public category_id: Category | number;
  public title: string;
  public content: string;
  public image: string;
  public createdAt: any;

  constructor(input: any) {
    Object.assign(this, input);

    if (input.category) {
      Object.defineProperty(this, 'category', new Category(input.category));
      delete this.category_id;
    }

    if (input.user) {
      Object.defineProperty(this, 'user', new User(input.user));
      delete this.user_id;
    }

  }
}
