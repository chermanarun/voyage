import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateDetailsRoutingModule } from './state-details-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateDetailsComponent } from './state-details.component';


@NgModule({
  declarations: [StateDetailsComponent],
  imports: [
    CommonModule,
    StateDetailsRoutingModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule
  ]
})
export class StateDetailsModule { }
