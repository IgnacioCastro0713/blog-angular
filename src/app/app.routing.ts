import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './helpers';

import {
  LoginComponent,
  HomeComponent,
  RegisterComponent,
  ErrorComponent
} from './components';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
