import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'admins',
        loadChildren: './admins/admins.module#AdminsModule',
      },
      {
        path: 'lawyers',
        loadChildren: './lawyers/lawyers.module#LawyersModule',
      },
      {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule',
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
export class UsersRoutingModule {
}
