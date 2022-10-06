import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {LogoModule} from "../shared/logo/logo.module";
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


@NgModule({
  declarations: [
    SystemComponent,
    SideNavComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    LogoModule
  ]
})
export class SystemModule { }
