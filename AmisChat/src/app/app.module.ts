import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBoxComponent } from './header-box/header-box.component';
import { LeftBoxComponent } from './left-box/left-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBoxComponent,
    LeftBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
