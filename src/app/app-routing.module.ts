import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'state',
    loadChildren: () => import('./state-details/state-details.module').then(m => m.StateDetailsModule)
  },
  {
    path: 'temple',
    loadChildren: () => import('./temple-details/temple-details.module').then(m => m.TempleDetailsModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./temple-gallery-view/temple-gallery-view.module').then(m => m.TempleGalleryViewModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
