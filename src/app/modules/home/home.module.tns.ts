import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterMedicalEmergencyComponent } from './register-medical-emergency/register-medical-emergency.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', },
  { path: 'home', component: HomeComponent },
  { path: 'medical-emergency', component: RegisterMedicalEmergencyComponent },
]

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  declarations: [HomeComponent, RegisterMedicalEmergencyComponent],
})
export class HomeModule { }
