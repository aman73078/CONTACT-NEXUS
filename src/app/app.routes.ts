import { Routes } from '@angular/router';
import { FullComponent } from './feature/full/full.component';

export const routes: Routes = [
    {
        path:'auth/login', loadComponent: () => import('./feature/pages/login/login.component').then(c => c.LoginComponent),
    },
    {
        path:'overview',
        component:FullComponent,
        children:[
            {
                path:'contact',
                loadComponent: () => import('./feature/pages/contact/contact.component').then(c => c.ContactComponent),
            }
        ] 
    }
];
