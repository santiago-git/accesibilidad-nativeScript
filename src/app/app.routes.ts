import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', },
  { path: 'login', component: LoginComponent, },
  {
    path:
      'home',
    // loadChildren: () => HomeModule,
    loadChildren: './modules/home/home.module.tns#HomeModule',
    // loadChildren: 'src/app/modules/home/home.module.tns#HomeModule',
  }
];
