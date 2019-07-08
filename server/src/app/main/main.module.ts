import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main.routing.module';
import {
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {ProfileAccessModule} from './components/profile-access/profile-access.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    ProfileAccessModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule {
}
