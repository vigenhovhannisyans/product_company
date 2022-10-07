import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from "./project-pages/board/board.component";
import {ProjectDetailsComponent} from "./project-pages/project-details/project-details.component";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'board'},
  {path:'board', component: BoardComponent},
  {path:'statistic', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
