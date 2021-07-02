import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempleGalleryViewRoutingModule } from './temple-gallery-view-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TempleGalleryViewComponent } from './temple-gallery-view.component';


@NgModule({
  declarations: [TempleGalleryViewComponent],
  imports: [
    CommonModule,
    TempleGalleryViewRoutingModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule
  ]
})
export class TempleGalleryViewModule { }
