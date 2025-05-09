import { Component, OnInit } from '@angular/core';
import { DiaalimentoService } from 'src/app/Services/diaalimento.service';

@Component({
  selector: 'app-listardiaalimento',
  templateUrl: './listardiaalimento.component.html',
  styleUrls: ['./listardiaalimento.component.css']
})

export class ListardiaalimentoComponent implements OnInit{

  Listardiasalimentos:any = [];

  ngOnInit(){
    this.loadlistardiaalimentos();
  }

  constructor(public diaalimentoService:DiaalimentoService){}

  loadlistardiaalimentos(){
  return this.diaalimentoService.Getdiaalimentos().subscribe((data:{}) => {
    this.Listardiasalimentos= data;
  })
  }

  deletediaalimento(id:number){

  if(confirm('Está seguro de eliminar el día alimento?')){
    this.diaalimentoService.Deletediaalimento(id)
    .subscribe(res => {
      this.loadlistardiaalimentos();
    });
  }
  }
}
