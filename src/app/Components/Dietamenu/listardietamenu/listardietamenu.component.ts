import { Component, OnInit } from '@angular/core';
import { DietamenuService } from 'src/app/Services/dietamenu.service';

@Component({
  selector: 'app-listardietamenu',
  templateUrl: './listardietamenu.component.html',
  styleUrls: ['./listardietamenu.component.css']
})

export class ListardietamenuComponent implements OnInit{

  Listardietasmenus:any = [];

  ngOnInit(){
    this.loadlistardietamenu();
  }

  constructor(public dietamenuService:DietamenuService){}

  loadlistardietamenu(){
  return this.dietamenuService.Getdietasmenus().subscribe((data:{}) => {
    this.Listardietasmenus= data;
  })
  }

  deletedietamenu(id:number){

  if(confirm('Está seguro de eliminar la dieta menu?')){
    this.dietamenuService.Deletedietamenu(id)
    .subscribe(res => {
      this.loadlistardietamenu();
    });
  }
  }

}
