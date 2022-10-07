import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from "./project-pages/board/board.component";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'board'},
  {path:'board', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
