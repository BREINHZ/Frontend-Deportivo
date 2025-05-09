import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})

export class ListarusuarioComponent implements OnInit{

  Listarusuarios:any = [];

  ngOnInit(){
    this.loadlistarusuarios();
  }

  constructor(public usuarioService:UsuarioService){}

  loadlistarusuarios(){
  return this.usuarioService.Getusuarios().subscribe((data:{}) => {
    this.Listarusuarios= data;
  })
  }

  deleteusuario(id:number){

  if(confirm('Está seguro de eliminar el usuario?')){
    this.usuarioService.Deleteusuario(id)
    .subscribe(res => {
      this.loadlistarusuarios();
    });
  }
  }

}

