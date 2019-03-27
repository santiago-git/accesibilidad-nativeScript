import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RegisterMedicalEmergencyComponent } from './register-medical-emergency/register-medical-emergency.component';

@NgModule({
  declarations: [HomeComponent, RegisterMedicalEmergencyComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
