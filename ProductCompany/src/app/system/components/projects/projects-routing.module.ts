import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {ProjectsComponent} from "./projects.component";

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'project', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
