import { Component, OnInit } from '@angular/core';
import { DiaService } from 'src/app/Services/dia.service';

@Component({
  selector: 'app-listardias',
  templateUrl: './listardias.component.html',
  styleUrls: ['./listardias.component.css']
})

export class ListardiasComponent implements OnInit{

  Listardias:any = [];

  ngOnInit(){
    this.loadlistardias();
  }

  constructor(public diaService:DiaService){}

  loadlistardias(){
  return this.diaService.Getdias().subscribe((data:{}) => {
    this.Listardias= data;
  })
  }

  deletedia(id:number){

  if(confirm('Está seguro de eliminar el día?')){
    this.diaService.Deletedia(id)
    .subscribe(res => {
      this.loadlistardias();
    });
  }
  }
}


