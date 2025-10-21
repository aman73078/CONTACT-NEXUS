import { Routes } from '@angular/router';
import { FullComponent } from './feature/full/full.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./feature/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'overview',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'contact',
        pathMatch: 'full',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./feature/pages/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
      },
    ],
  },
];
