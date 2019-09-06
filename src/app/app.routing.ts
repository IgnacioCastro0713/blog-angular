import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutes } from './routes'

import {
  HomeComponent,
  ErrorComponent
} from './components';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  ...AuthRoutes,
  {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
