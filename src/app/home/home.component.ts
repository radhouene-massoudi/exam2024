import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  l !:Menu[];
constructor(private s:ServiceService) { }
ngOnInit(){
  this.s.getMenu().subscribe(
    (d)=>{
      this.l=d;
    }
  );
}
}
