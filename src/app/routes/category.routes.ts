import { Routes } from '@angular/router';
import { AuthGuard } from '../helpers';

import { CategoryCreateComponent, CategoryListComponent } from '../components';

export const CategoryRoutes: Routes = [
    { path: 'category', component: CategoryListComponent, canActivate: [AuthGuard] },
    { path: 'category/create', component: CategoryCreateComponent, canActivate: [AuthGuard] },
];
