import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule { }
