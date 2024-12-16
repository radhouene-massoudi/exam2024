import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResevationRoutingModule } from './resevation-routing.module';
import { ListeresirvationComponent } from '../listeresirvation/listeresirvation.component';


@NgModule({
  declarations: [
    ListeresirvationComponent
  ],
  imports: [
    CommonModule,
    ResevationRoutingModule
  ]
})
export class ResevationModule { }
