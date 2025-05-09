import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicio } from 'src/app/Modelo/ejercicio';
import { EjercicioService } from 'src/app/Services/ejercicio.service';

@Component({
  selector: 'app-editarejercicio',
  templateUrl: './editarejercicio.component.html',
  styleUrls: ['./editarejercicio.component.css']
})
export class EditarejercicioComponent implements OnInit{

  Listadomenus:any = [];

  ejercicio:Ejercicio={
    id_ejercicio:0,
    nombre:'',
    dificultad:'',
    id_youtube:'',
    imagen:'',
    estiramiento:''
  }

  constructor(private readonly ejercicioService:EjercicioService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getejercicio(params['id']);
        }
      );
    }

    getejercicio(id:number){
      this.ejercicioService.Getejercicio(id).subscribe(
      data =>{
        this.ejercicio = data;
      }
      );
    }


      update(){
        this.ejercicioService.Updateejercicio(this.ejercicio).subscribe(
          () => {
            this.router.navigate(["/createplandeportivo"])
          }
        );
      }

}
