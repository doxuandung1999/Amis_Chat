import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBoxComponent } from './box/header-box/header-box.component';
import { LeftBoxComponent } from './box/left-box/left-box.component';
import { BoxComponent } from './box/box.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RightBoxComponent } from './box/right-box/right-box.component';
import { InforBoxComponent } from './box/infor-box/infor-box.component';
import { TypeTextComponent } from './box/type-text/type-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBoxComponent,
    LeftBoxComponent,
    BoxComponent,
    SignInComponent,
    SignUpComponent,
    RightBoxComponent,
    InforBoxComponent,
    TypeTextComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
