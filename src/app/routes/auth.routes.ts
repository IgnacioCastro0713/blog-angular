import {Routes} from '@angular/router';
import {AuthGuard} from '../helpers';

import {
  LoginComponent,
  RegisterComponent,
  SettingsProfileComponent
} from '../components';


export const AuthRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'settings', component: SettingsProfileComponent, canActivate: [AuthGuard]},
];
