import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AboutUsComponent,
    LoginComponent,
    ContactComponent,
    RegisterEventComponent,
    RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
