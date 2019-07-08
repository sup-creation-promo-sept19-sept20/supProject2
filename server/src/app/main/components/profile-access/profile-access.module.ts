import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAccessComponent } from './profile-access.component';
import {AuthModule} from '../../../auth/auth.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    MatButtonModule
  ],
  declarations: [ProfileAccessComponent],
  exports: [ProfileAccessComponent],
})
export class ProfileAccessModule { }
