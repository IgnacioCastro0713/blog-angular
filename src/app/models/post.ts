import { User } from './user';
import { Category } from './category';

export class Post {
  private id: number;
  private user_id: User | number;
  private category_id: Category | number;
  private title: string;
  private content: string;
  private image: string;
  private createdAt: any;

  constructor(input: any) {
    Object.assign(this, input);

    if (input.category) {
      Object.defineProperty(this, 'category', input.category);
      delete this.category_id;
    }

    if (input.user) {
      Object.defineProperty(this, 'user', input.user);
      delete this.user_id;
    }

  }
}
