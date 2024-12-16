import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeresirvationComponent } from '../listeresirvation/listeresirvation.component';

const routes: Routes = [
  {
    path:'',component:ListeresirvationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResevationRoutingModule { }
