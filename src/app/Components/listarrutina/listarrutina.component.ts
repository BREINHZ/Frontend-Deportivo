import { Component, OnInit } from '@angular/core';
import { RutinaService } from 'src/app/Services/rutina.service';

@Component({
  selector: 'app-listarrutina',
  templateUrl: './listarrutina.component.html',
  styleUrls: ['./listarrutina.component.css']
})
export class ListarrutinaComponent implements OnInit{

  Listarrutinas:any = [];

  ngOnInit(){
    this.loadlistarrutinas();
  }

  constructor(public rutinaService:RutinaService){}

  loadlistarrutinas(){
  return this.rutinaService.Getrutinas().subscribe((data:{}) => {
    this.Listarrutinas= data;
  })
  }

  deleterutina(id:number){

  if(confirm('Está seguro de eliminar la rutina?')){
    this.rutinaService.Deleterutina(id)
    .subscribe(res => {
      this.loadlistarrutinas();
    });
  }
  }
}

