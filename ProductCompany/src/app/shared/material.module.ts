import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
})
export class MaterialModule { }
