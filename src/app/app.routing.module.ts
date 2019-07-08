import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnectedGuard} from './auth/auth-guards/connected.guard.service';
import {AlreadyConnectedGuard} from './connect/already-connected.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule',
    canActivate: [ConnectedGuard],
  },
  {
    path: 'connect',
    loadChildren: './connect/connect.module#ConnectModule',
    canActivate: [AlreadyConnectedGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
