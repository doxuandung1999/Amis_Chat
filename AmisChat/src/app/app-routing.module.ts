import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import {BoxComponent} from './box/box.component';
import { SignInComponent} from './sign-in/sign-in.component';
import { SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  
  {path : 'signin' , component : SignInComponent},
  {path : 'signup' , component : SignUpComponent},
  {path : '**' , component : BoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
