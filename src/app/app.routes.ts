import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeModule } from './modules/home/home.module.tns';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module.tns#HomeModule',
    // loadChildren: () => HomeModule,
  },
];
