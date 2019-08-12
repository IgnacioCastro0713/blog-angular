import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  @ViewChild('successToast', undefined) private successToast: SwalComponent;
  @ViewChild('errorToast', undefined) private errorToast: SwalComponent;

  public title: string;
  public user: User;

  private form: FormGroup;
  private submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.title = 'Login';
    this.validators();
  }

  validators() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get fields() { return this.form.controls; }

  onLogin() {

    this.submitted = true;

    if (this.form.invalid) {
      this.errorToast.show();
      return;
    }

    this.service.login(this.form).subscribe(
      response => {
        if (!response.ok) { return; }
        this.user = response.user;
        this.successToast.show();
        this.submitted = false;
        this.form.reset();
    },
      error => {
        this.errorToast.show();
      }
    );

  }

}
