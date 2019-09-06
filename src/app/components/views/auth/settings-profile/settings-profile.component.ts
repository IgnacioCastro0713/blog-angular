import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService, AuthenticationService } from '../../../../services';
import { User } from '../../../../models';
import {Router} from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import {environment} from '../../../../../environments/environment'

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.css']
})
export class SettingsProfileComponent implements OnInit {
  @ViewChild('successToast', undefined) private successToast: SwalComponent;
  @ViewChild('errorToast', undefined) private errorToast: SwalComponent;

  public title: string = 'Edit Profile';
  public errors: any = [];
  public user: User;
  public url: string = environment.base_url;

  private form: FormGroup;
  private submitted: boolean = false;

  public optionsFroala: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "3",
    uploadAPI:  {
      url:this.url+"user/upload",
      headers: {
        "Authorization" : `Bearer ${this._authService.token}`
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText: 'select image profile'
  };


  constructor(
    private _authService: AuthenticationService,
    private _userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  get fields() { return this.form.controls; }

  get auth(): User {
    this.user = this._authService.identity;
    return this.user
  }

  ngOnInit() {
    this.validator();
    this.form.patchValue(this._authService.identity);
  }

  validator() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      image: null
    });

  }

  private prepare() {
    return new User(this.form.value);
  }

  onUpdateProfile() {

    this.submitted = true;

    if (this.form.invalid) {
      this.errorToast.show();
      return;
    }
    this._userService.updateProfile(this.prepare(), this._authService.identity.id).subscribe(
      response => {
        if (!response.ok) { return; }
        this.submitted = false;
        localStorage.setItem('identity', JSON.stringify(response.data));
        this.form.reset();
        this.successToast.show();
        this.router.navigate(['/'])
      },
      err => {
        this.errors = err.error.errors;
        this.errorToast.show();
      }
    );
  }

  avatarUpload(data) {
    let img = JSON.parse(data.response);
    this.form.controls.image.setValue(img.data);
  }
}
