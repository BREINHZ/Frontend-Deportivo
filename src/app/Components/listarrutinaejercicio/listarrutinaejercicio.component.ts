import { Component, OnInit } from '@angular/core';
import { RutinaejercicioService } from 'src/app/Services/rutinaejercicio.service';

@Component({
  selector: 'app-listarrutinaejercicio',
  templateUrl: './listarrutinaejercicio.component.html',
  styleUrls: ['./listarrutinaejercicio.component.css']
})
export class ListarrutinaejercicioComponent implements OnInit {

  Listarrutinaejercicio:any = [];

  ngOnInit(){
    this.loadlistarrutinaejercicio();
  }

  constructor(public rutinaejercicioService:RutinaejercicioService){}

  loadlistarrutinaejercicio(){
  return this.rutinaejercicioService.Getrutinasejercicios().subscribe((data:{}) => {
    this.Listarrutinaejercicio= data;
  })
  }

  deleterutinaejercicio(id:number){

  if(confirm('Está seguro de eliminar la rutina usuario?')){
    this.rutinaejercicioService.Deleterutinaejercicio(id)
    .subscribe(res => {
      this.loadlistarrutinaejercicio();
    });
  }
  }

}
