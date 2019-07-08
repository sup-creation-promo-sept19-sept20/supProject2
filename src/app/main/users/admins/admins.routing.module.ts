import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminsComponent} from './admins.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    children: [
      {
        path: 'list',
        loadChildren: './admins-list/admins-list.module#AdminsListModule'
      },
      {
        path: 'detail',
        loadChildren: './admin-detail/admin-detail.module#AdminDetailModule'
      }
    ]
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
export class AdminsRoutingModule {
}
