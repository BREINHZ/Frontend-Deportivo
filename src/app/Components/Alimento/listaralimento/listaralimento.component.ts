import { Component, OnInit } from '@angular/core';
import { AlimentoService } from 'src/app/Services/alimento.service';

@Component({
  selector: 'app-listaralimento',
  templateUrl: './listaralimento.component.html',
  styleUrls: ['./listaralimento.component.css']
})

export class ListaralimentoComponent implements OnInit{

  Listaralimentos:any = [];

  ngOnInit(){
    this.loadlistaralimentos();
  }

  constructor(public alimentoService:AlimentoService){}

  loadlistaralimentos(){
  return this.alimentoService.Getalimentos().subscribe((data:{}) => {
    this.Listaralimentos= data;
  })
  }

  deletealimento(id:number){

  if(confirm('Está seguro de eliminar el alimento?')){
    this.alimentoService.Deletealimento(id)
    .subscribe(res => {
      this.loadlistaralimentos();
    });
  }
  }

}
