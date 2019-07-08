import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDetailComponent} from './admin-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: AdminDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AdminDetailRoutingModule {
}
