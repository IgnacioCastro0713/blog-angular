import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: any = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategory().subscribe(
      response => {
        this.categories = response;
        console.log(this.categories);
      },
      error => {
        console.log(error);
      }
    );
  }
}
