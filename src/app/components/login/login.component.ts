import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import {Router} from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  @ViewChild('successToast', undefined) private successToast: SwalComponent;
  @ViewChild('errorToast', undefined) private errorToast: SwalComponent;

  public title: string;
  public user: User;

  private identity;
  private token;
  private form: FormGroup;
  private submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthenticationService,
    private router: Router,
  ) {
    if (this.service.identity) {
      this.router.navigate(['/']);
    }
  }

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

    this.user = this.form.value;

    this.service.login(this.user).subscribe(
      response => {
        if (!response.ok) { return; }

        this.identity = response.user;
        this.token = response.token;

        localStorage.setItem('identity', JSON.stringify(this.identity));
        localStorage.setItem('token', this.token);

        this.successToast.show();
        this.submitted = false;
        this.form.reset();
        this.router.navigate(['/']);
    },
      error => {
        this.errorToast.show();
      }
    );

  }

}
