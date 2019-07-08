import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import {CustomersRoutingModule} from './customers.routing.module';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatToolbarModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
