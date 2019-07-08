import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminsListComponent} from './admins-list.component';
import {AdminsListRoutingModule} from './admins-list-routing.module';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSortModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    AdminsListRoutingModule
  ],
  declarations: [AdminsListComponent],
})
export class AdminsListModule {
}
