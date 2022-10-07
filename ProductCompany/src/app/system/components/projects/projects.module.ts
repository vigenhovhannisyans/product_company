import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import {ProjectsComponent} from "./projects.component";
import { ProjectComponent } from './project/project.component';
import {MaterialModule} from "../../../shared/material.module";


@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule
  ]
})
export class ProjectsModule { }
