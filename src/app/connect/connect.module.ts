import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect.component';
import {ConnectRoutingModule} from './connect-routing.module';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConnectRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
  ],
  declarations: [ConnectComponent]
})
export class ConnectModule { }
