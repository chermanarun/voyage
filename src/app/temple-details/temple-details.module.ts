import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempleDetailsRoutingModule } from './temple-details-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TempleDetailsComponent } from './temple-details.component';


@NgModule({
  declarations: [TempleDetailsComponent],
  imports: [
    CommonModule,
    TempleDetailsRoutingModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule
  ]
})
export class TempleDetailsModule { }
