import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawyersComponent } from './lawyers.component';
import {LawyersRoutingModule} from './lawyers.routing.module';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LawyersRoutingModule,
    MatToolbarModule
  ],
  declarations: [LawyersComponent]
})
export class LawyersModule { }
