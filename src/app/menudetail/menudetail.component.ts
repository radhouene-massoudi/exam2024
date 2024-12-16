import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.component.html',
  styleUrls: ['./menudetail.component.css']
})
export class MenudetailComponent {
constructor(private s:ServiceService,private ac:ActivatedRoute){

}
msg='';
detailsinformatons!:Menu;
ngOnInit(){
  this.s.getMenuById(this.ac.snapshot.params['id']).subscribe(
    (d)=>{
this.detailsinformatons=d;
    }
  )
}
updateMenu(f:any){
  if(f.mark==0){
this.msg='testdfdh '
  }else if(f.mark>5){
    this.msg='value less than 5 '
  }else{
  this.s.getMenuById(this.ac.snapshot.params['id']).subscribe(
    (d)=>{
this.detailsinformatons=d;
let ancienMark=this.detailsinformatons.mark;
let newMark=(ancienMark+f.mark)/2;
this.detailsinformatons.mark=newMark;
this.s.updateMenu(this.detailsinformatons,this.ac.snapshot.params['id']).subscribe(
  ()=>{
    console.log("Menu updated successfully");
  }
)
    }
  )
 
}
}
}
