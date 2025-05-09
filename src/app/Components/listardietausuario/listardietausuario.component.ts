import { Component, OnInit } from '@angular/core';
import { UsuariodietaService } from 'src/app/Services/usuariodieta.service';

@Component({
  selector: 'app-listardietausuario',
  templateUrl: './listardietausuario.component.html',
  styleUrls: ['./listardietausuario.component.css']
})

export class ListardietausuarioComponent implements OnInit{

  Listardietausuario:any = [];

  ngOnInit(){
    this.loadlistarusuariodieta();
  }

  constructor(public usuariodietaService:UsuariodietaService){}

  loadlistarusuariodieta(){
  return this.usuariodietaService.Getusuariodietas().subscribe((data:{}) => {
    this.Listardietausuario= data;
  })
  }

  deletedietausuario(id:number){

  if(confirm('Está seguro de eliminar la dieta usuario?')){
    this.usuariodietaService.Deleteusuariodieta(id)
    .subscribe(res => {
      this.loadlistarusuariodieta();
    });
  }
  }

}
