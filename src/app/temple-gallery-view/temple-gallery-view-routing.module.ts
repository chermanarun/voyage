import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempleGalleryViewComponent } from './temple-gallery-view.component';

const routes: Routes = [
  {
    path: '',
    component: TempleGalleryViewComponent
  },
  {
    path: ':id',
    component: TempleGalleryViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempleGalleryViewRoutingModule { }
