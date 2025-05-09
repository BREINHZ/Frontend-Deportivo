import { Component, OnInit } from '@angular/core';
import { EjercicioService } from 'src/app/Services/ejercicio.service';

@Component({
  selector: 'app-listarejercicios',
  templateUrl: './listarejercicios.component.html',
  styleUrls: ['./listarejercicios.component.css']
})

export class ListarejerciciosComponent implements OnInit {

  Listarejercicios:any = [];

  ngOnInit(){
    this.loadlistarejercicios();
  }

  constructor(public ejecicioService:EjercicioService){}

  loadlistarejercicios(){
  return this.ejecicioService.Getejercicios().subscribe((data:{}) => {
    this.Listarejercicios= data;
  })
  }

  deleteejercicio(id:number){

  if(confirm('Está seguro de eliminar el ejercicio?')){
    this.ejecicioService.Deleteejercicio(id)
    .subscribe(res => {
      this.loadlistarejercicios();
    });
  }
  }

}
