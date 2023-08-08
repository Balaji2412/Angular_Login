import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';

//
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DasbboardComponent } from './dasbboard/dasbboard.component';
import { FirstserviceService } from './firstservice.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    LoginComponent,
    DasbboardComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FirstserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
