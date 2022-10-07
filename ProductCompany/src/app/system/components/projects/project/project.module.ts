import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import {ProjectComponent} from "./project.component";
import { BoardComponent } from './project-pages/board/board.component';
import {MaterialModule} from "../../../../shared/material.module";
import {ProjectDetailsComponent} from "./project-pages/project-details/project-details.component";
import { NgChartsModule, NgChartsConfiguration  } from 'ng2-charts';


@NgModule({
  declarations: [
    ProjectComponent,
    BoardComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    NgChartsModule,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
})
export class ProjectModule { }
