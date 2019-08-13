import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models';
import { AuthenticationService } from './services';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('infoToast', undefined) private infoToast: SwalComponent;
  title = 'blog-angular';
  public user: User;

  constructor(private service: AuthenticationService, private router: Router) {}

  public get auth(): User {
    this.user = this.service.identity;
    return this.user
  }

  logout() {
    this.service.logout().subscribe(
      response => {
        if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.clear();
        this.infoToast.show();
        this.router.navigate(['/']);
      }
    }, error => {
        if (error) {
          console.log();
        }
      }
    );
  }
}
