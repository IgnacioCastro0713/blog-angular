import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../../../models';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CategoryService } from '../../../../services';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  @ViewChild('successToast', undefined) private successToast: SwalComponent;
  @ViewChild('errorToast', undefined) private errorToast: SwalComponent;

  public title = 'Create Category';
  public errors: any = [];
  public category: Category;

  private form: FormGroup;
  private submitted = false;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.validator();
  }

  validator() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]]
    });
  }

  get fields() {
    return this.form.controls;
  }

  onStoreCategory() {
    this.submitted = true;

    if (this.form.invalid) {
      this.errorToast.show();
      return;
    }

    this.categoryService.storeCategory(new Category(this.form.value)).subscribe(response => {
      if (!response.ok) {
        return;
      }
      this.submitted = false;
      this.form.reset();
      this.successToast.show();
      this.router.navigate(['category/']);

    }, error => {
      console.log(error);
      this.errors = error.error.errors;
      this.errorToast.show();
    });
  }
}
