import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRemeberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRemeberComponent,
    AuthMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRemeberComponent
  ],
  entryComponents: [
    AuthFormComponent
  ]
})
export class AuthFormModule {}