/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public title: string;
  public user: User;

  public form: FormGroup;
  public submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: UserService
  ) {}

  ngOnInit() {
    this.title = 'register';
    this.validators();
  }

  validators() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fields() { return this.form.controls; }

  onRegister() {

    this.submitted = true;

    if (this.form.invalid) return;

    this.user = this.form.value;

    this._service.register(this.user).subscribe(
      res => {
        console.log(res);
        this.submitted = false;
        this.form.reset()
        },
      error => {
        console.log(<any>error);
      }
    );

  }

}
