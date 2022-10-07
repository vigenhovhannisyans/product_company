import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import {ProjectComponent} from "./project.component";
import { BoardComponent } from './project-pages/board/board.component';
import {MaterialModule} from "../../../../shared/material.module";


@NgModule({
  declarations: [
    ProjectComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule
  ]
})
export class ProjectModule { }
