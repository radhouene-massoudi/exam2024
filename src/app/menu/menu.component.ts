import { Component, Input } from '@angular/core';
import { Menu } from '../model/menu';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
@Input()liste!:Menu[];
detailsinformatons!:Menu;
constructor(private s:ServiceService,private ac:ActivatedRoute,private router:Router){

}
goToReservation(id:any){
  //this.router.navigate(['/reservations']);
  
  
console.log(id);
  this.s.getMenuById(id).subscribe(
    (d)=>{
this.detailsinformatons=d;
this.detailsinformatons.reservation.push(3);
this.s.updateMenu(this.detailsinformatons,id).subscribe(
  ()=>{
    console.log("Menu updated successfully");
  }
)
    }
  )
 


}
detail(id:any){
this.router.navigate(['/details/',id])
}
}
