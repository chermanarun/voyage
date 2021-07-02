import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempleDetailsComponent } from './temple-details.component';

const routes: Routes = [
  {
    path: '',
    component: TempleDetailsComponent
  },
  {
    path: ':id',
    component: TempleDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempleDetailsRoutingModule { }
