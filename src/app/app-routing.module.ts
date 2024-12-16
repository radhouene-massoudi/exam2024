import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMenuComponent } from './menu reservation/menu/add-menu/add-menu.component';
import { ListeresirvationComponent } from './modulereservation/listeresirvation/listeresirvation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenudetailComponent } from './menudetail/menudetail.component';

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'details/:id',component:MenudetailComponent
  },
  {
    path: 'add',loadChildren:()=>import('./menu reservation/menu/menu.module').then(m =>m.MenuModule)
  },
  {
    path: 'reservations',loadChildren:()=>import('./modulereservation/resevation/resevation.module').then(m =>m.ResevationModule)
  },
  {
    path: '**',component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
