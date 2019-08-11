/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'
import {Router} from "@angular/router"

import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public title: string;
  public user: User;
  public errors: any;

  private form: FormGroup;
  private submitted: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = 'register';
    this.validators();
    this.errors = []
  }

  validators() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {validator: MustMatch('password', 'confirmPassword')});
  }

  get fields() { return this.form.controls; }

  onRegister() {

    this.submitted = true;

    if (this.form.invalid) return;

    this.user = this.form.value;

    this._service.register(this.user).subscribe(
      res => {
        console.log(res);
        if (res.ok) {
          this.submitted = false;

          this.form.reset();
          // @ts-ignore
          this.router.navigateByUrl('/login',{res: res.ok});
        }
        },
      err => {
        console.log(<any>err);
        this.errors = err.error.errors;
      }
    );

  }

}
