import {User} from './user';
import {Category} from './category';

export class Post {
  private id: number;
  private user_id: User | number;
  private category_id: Category | number;
  private title: string;
  private content: string;
  private image: string;
  private createdAt: any;

  constructor(input: any, get: boolean = false) {
    Object.assign(this, input);
    this.category_id = get ? new Category(input.category) : input.category_id;
  }
}
