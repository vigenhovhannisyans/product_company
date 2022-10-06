import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: '', redirectTo:'auth', pathMatch:'full'},
  {path: 'auth', component:AuthComponent, loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'system', loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
