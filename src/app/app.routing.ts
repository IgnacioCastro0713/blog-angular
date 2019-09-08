import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutes, CategoryRoutes, PostRoutes } from './routes';

import { HomeComponent, ErrorComponent } from './components';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  ...AuthRoutes,
  ...CategoryRoutes,
  ...PostRoutes,
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
