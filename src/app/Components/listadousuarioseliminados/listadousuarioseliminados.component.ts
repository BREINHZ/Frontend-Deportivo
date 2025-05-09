import { Component, OnInit } from '@angular/core';
import { UsuarioseliminadosService } from 'src/app/Services/usuarioseliminados.service';

@Component({
  selector: 'app-listadousuarioseliminados',
  templateUrl: './listadousuarioseliminados.component.html',
  styleUrls: ['./listadousuarioseliminados.component.css']
})
export class ListadousuarioseliminadosComponent implements OnInit {

  Listadoeliminados:any = [];

  ngOnInit(){
    this.loadlistarusuarioseliminados();
  }

  constructor(public usuarioseliminadosService:UsuarioseliminadosService){}

  loadlistarusuarioseliminados(){
  return this.usuarioseliminadosService.Getusuarioseliminados().subscribe((data:{}) => {
    this.Listadoeliminados= data;
  })
  }


  deleteusuariodelistaeliminados(id:number){

  if(confirm('Está seguro de eliminar el usuario de la lista de eliminados?')){
    this.usuarioseliminadosService.Delete(id)
    .subscribe(res => {
      this.loadlistarusuarioseliminados();
    });
  }
  }


}


