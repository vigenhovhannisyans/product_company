import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {ProjectsComponent} from "./projects.component";

const routes: Routes = [
  {path: '',  pathMatch:'full', component: ProjectsComponent},
  {path: 'project', component: ProjectComponent, loadChildren: ()=> import('./project/project.module').then(m => m.ProjectModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
