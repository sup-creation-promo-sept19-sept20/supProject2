import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminsComponent} from './admins.component';
import {AdminsRoutingModule} from './admins.routing.module';
import {AdminsService} from './admins.service';

@NgModule({
  imports: [
    CommonModule,
    AdminsRoutingModule
  ],
  declarations: [AdminsComponent],
  providers: [AdminsService]
})
export class AdminsModule {
}
