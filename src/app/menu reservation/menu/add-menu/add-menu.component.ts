
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/model/menu';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  m !:Menu;
constructor( private s:ServiceService){

}
fg=new FormGroup({
  title:new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.required,Validators.minLength(10)]),

})
addMenuafterOneClic(f:any){
   //this.t=f.value.title
  this.m=f;
  this.m.aprouved=false;
  this.m.mark=0;
  console.log(this.m)
  this.s.addMenu(this.m).subscribe(
    ()=>{
      console.log('added')
    }
  )
}
}
