import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth.module';
import { AuthRoutingModule } from './modules/auth-routing.module';
import { HomeRoutingModule } from './modules/home-routing.module';
import { HomeModule } from './modules/home.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AuthRoutingModule,
    HomeModule,
    HomeRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
