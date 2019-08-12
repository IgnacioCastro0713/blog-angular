import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import { MustMatch } from '../../_helpers/must-match.validator';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  @ViewChild('errorToast', undefined) private errorToast: SwalComponent;

  public title: string;
  public user: User;
  public errors: any;

  private form: FormGroup;
  private submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = 'register';
    this.validators();
    this.errors = [];
  }

  validators() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {validator: MustMatch('password', 'confirmPassword')});
  }

  get fields() { return this.form.controls; }

  onRegister() {

    this.submitted = true;

    if (this.form.invalid) {
      this.errorToast.show();
      return;
    }

    this.user = this.form.value;

    this.service.register(this.user).subscribe(
      response => {
        if (!response.ok) { return; }
        this.submitted = false;
        this.form.reset();
        this.router.navigateByUrl('/login');
      },
      err => {
        this.errors = err.error.errors;
        this.errorToast.show();
      }
    );

  }

}
