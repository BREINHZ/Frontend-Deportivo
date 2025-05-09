import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutina_ejercicio } from 'src/app/Modelo/rutina_ejercicio';
import { EjercicioService } from 'src/app/Services/ejercicio.service';
import { RutinaService } from 'src/app/Services/rutina.service';
import { RutinaejercicioService } from 'src/app/Services/rutinaejercicio.service';

@Component({
  selector: 'app-editarrutinaejercicio',
  templateUrl: './editarrutinaejercicio.component.html',
  styleUrls: ['./editarrutinaejercicio.component.css']
})

export class EditarrutinaejercicioComponent implements OnInit{

  Listadorutinas:any = [];
  Listadoejercicios:any = [];


  rutina_ejercicio:Rutina_ejercicio={
    id:0,
    id_rutina:0,
    id_ejercicio:0
  }

  constructor(private readonly rutinaService:RutinaService,
    private readonly ejercicioService:EjercicioService,
    private readonly rutinaejercicioService:RutinaejercicioService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getrutinaejercicio(params['id']);
        }
      );

      this.loadlistarrutinas();
      this.loadlistarejercicios();
    }

    getrutinaejercicio(id:number){
      this.rutinaejercicioService.Getrutinaejercicio(id).subscribe(
      data =>{
        this.rutina_ejercicio = data;
      }
      );
    }

    loadlistarrutinas(){
      return this.rutinaService.Getrutinas().subscribe((data:{}) => {
        this.Listadorutinas = data;
      })
      }

      loadlistarejercicios(){
        return this.ejercicioService.Getejercicios().subscribe((data:{}) => {
          this.Listadoejercicios = data;
        })
        }

    update(){
      this.rutinaejercicioService.Updaterutinaejercicio(this.rutina_ejercicio).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }
}








