import { Component, OnInit } from '@angular/core';
import { DietaService } from 'src/app/Services/dieta.service';

@Component({
  selector: 'app-listardieta',
  templateUrl: './listardieta.component.html',
  styleUrls: ['./listardieta.component.css']
})
export class ListardietaComponent implements OnInit{

  Listardietas:any = [];

  ngOnInit(){
    this.loadlistardietas();
  }

  constructor(public dietaService:DietaService){}

  loadlistardietas(){
  return this.dietaService.Getdietas().subscribe((data:{}) => {
    this.Listardietas= data;
  })
  }

  deletedieta(id:number){

  if(confirm('Está seguro de eliminar la dieta?')){
    this.dietaService.Deletedieta(id)
    .subscribe(res => {
      this.loadlistardietas();
    });
  }
  }

}
