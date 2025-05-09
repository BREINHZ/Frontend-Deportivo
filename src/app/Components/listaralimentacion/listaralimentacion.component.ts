import { Component, OnInit } from '@angular/core';
import { AlimentacionService } from 'src/app/Services/alimentacion.service';

@Component({
  selector: 'app-listaralimentacion',
  templateUrl: './listaralimentacion.component.html',
  styleUrls: ['./listaralimentacion.component.css']
})

export class ListaralimentacionComponent implements OnInit{

  Listaralimentaciones:any = [];

  ngOnInit(){
    this.loadlistaralimentaciones();
  }

  constructor(public alimentacionService:AlimentacionService){}

  loadlistaralimentaciones(){
  return this.alimentacionService.Getalimentaciones().subscribe((data:{}) => {
    this.Listaralimentaciones= data;
  })
  }

  deletealimentacion(id:number){

  if(confirm('Está seguro de eliminar la alimentación?')){
    this.alimentacionService.Deletealimentacion(id)
    .subscribe(res => {
      this.loadlistaralimentaciones();
    });
  }
  }
}


