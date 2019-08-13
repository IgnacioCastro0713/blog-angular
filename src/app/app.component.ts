import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';
  public user: User;

  constructor(private service: AuthenticationService, private router: Router) {}

  public get auth(): User {
    return this.service.identity
  }

  logout() {
    this.service.logout().subscribe(
      response => {
        if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.clear();
        this.router.navigate(['/']);
      }
    })
  }
}
