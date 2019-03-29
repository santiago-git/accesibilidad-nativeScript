import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

// Components
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterMedicalEmergencyComponent } from './home/register-medical-emergency/register-medical-emergency.component';
import { SocketIOModule } from 'nativescript-socketio/angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterMedicalEmergencyComponent
  ],
  imports: [
    // SocketIOModule.forRoot('https://accesibilidad-back-end.herokuapp.com/'),
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
