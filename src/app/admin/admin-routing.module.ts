import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {CanActivateGuard} from '../core/can-activate.guard';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [CanActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
