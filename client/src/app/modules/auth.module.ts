import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  declarations: [
    AuthTabsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthTabsComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
