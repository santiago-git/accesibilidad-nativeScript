import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterMedicalEmergencyComponent } from './home/register-medical-emergency/register-medical-emergency.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', },
  { path: 'login', component: LoginComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'register-medical-center', component: RegisterMedicalEmergencyComponent, },
  // {
  //   path:
  //     'home',
  //   loadChildren: './modules/home/home.module.tns#HomeModule',
  // }
];
