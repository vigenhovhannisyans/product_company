import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";
import {AuthComponent} from "./auth/auth.component";
import {SystemGuard} from "./core/guards/system.guard";

const routes: Routes = [
  {path: '', redirectTo:'system', pathMatch:'full'},
  {path: 'auth', component:AuthComponent, loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule), canActivate:[AuthGuard]},
  {path: 'system', loadChildren:()=> import('./system/system.module').then(m => m.SystemModule), canActivate:[SystemGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
