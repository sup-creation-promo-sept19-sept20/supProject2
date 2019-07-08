import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminDetailComponent} from './admin-detail.component';
import {AdminDetailRoutingModule} from './admin-detail-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    AdminDetailRoutingModule
  ],
  declarations: [AdminDetailComponent]
})
export class AdminDetailModule {
}
