import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateDetailsComponent } from './state-details.component';

const routes: Routes = [
  {
    path: '',
    component: StateDetailsComponent
  },
  {
    path: ':id',
    component: StateDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateDetailsRoutingModule { }
