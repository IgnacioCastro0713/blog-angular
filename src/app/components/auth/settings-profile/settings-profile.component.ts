import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService, AuthenticationService } from '../../../services';
import { User } from '../../../models';
import {Router} from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.css']
})
export class SettingsProfileComponent implements OnInit {
  public title: string;
  private user: User;
  private form: FormGroup;
  private submitted: boolean = false;

  constructor(
    private _authService: AuthenticationService,
    private _userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  get currentUser () {
    return this._authService.identity
  }

  ngOnInit() {
    this.title = 'Edit Profile';
    this.validator();
  }

  validator() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    });

  }

  onUpdateProfile() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this._userService.updateProfile(this.user, this._authService.identity.id).subscribe(
      response => {
        if (!response.ok) { return; }
        this.submitted = false;
        this.form.reset();
        this.router.navigate(['/'])
      },
      error => {

      }
    );
  }

}
