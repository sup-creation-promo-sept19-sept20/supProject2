import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import {CrudRoutingModule} from "./crud.routing.module";
import {MatInputModule, MatSelectModule} from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    CrudRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  declarations: [CrudComponent]
})
export class CrudModule { }
