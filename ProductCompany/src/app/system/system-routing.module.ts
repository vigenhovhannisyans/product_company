import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";

const routes: Routes = [
  {path: '', redirectTo:'projects', pathMatch:'full'},
  {path:'projects', loadChildren:()=> import('./components/projects/projects.module').then(m => m.ProjectsModule )}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
