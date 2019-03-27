import { Component, ViewChild, ElementRef } from '@angular/core';
import { Credentials } from '~/app/interfaces';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { PatientService, SessionService } from '~/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggingIn = true;
  credentials: Credentials = {
    user: 'paciente1@gmail.com',
    password: '123456789'
  };
  processing = false;
  @ViewChild('user') user: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('confirmPassword') confirmPassword: ElementRef;

  constructor(private page: Page,
    private routerExtensions: RouterExtensions,
    private patientService: PatientService,
    private sessionService: SessionService) {
    this.page.actionBarHidden = true;
    // this.credentials = new Credentials();
    // this.credentials.user = "user@nativescript.org";
    // this.credentials.password = "password";
  }

  toggleForm() {
    // this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    console.log('redireccionar');
    this.routerExtensions.navigate(['/home']);
    return;
    if (!this.credentials.user || !this.credentials.password) {
      this.alert('Por favor ingresa un usuario y contraseña.');
      return;
    }
    this.processing = true;

    this.patientService.login(this.credentials).subscribe(patient => {
      this.sessionService.setLogin(patient);
      this.processing = false;
    }, err => {
      this.focusUser();
      this.processing = false;
      alert(err);
    });
  }

  focusUser() {
    this.user.nativeElement.focus();
  }

  focusPassword() {
    this.password.nativeElement.focus();
  }

  focusConfirmPassword() {
    if (!this.isLoggingIn) {
      this.confirmPassword.nativeElement.focus();
    }
  }

  alert(message: string) {
    return alert({
      title: 'Accesibilidad móvil',
      okButtonText: 'Aceptar',
      message: message
    });
  }
}

