import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AuthTabsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthTabsComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
