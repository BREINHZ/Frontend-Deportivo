import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dia } from 'src/app/Modelo/dia';
import { AlimentacionService } from 'src/app/Services/alimentacion.service';
import { DiaService } from 'src/app/Services/dia.service';

@Component({
  selector: 'app-editardia',
  templateUrl: './editardia.component.html',
  styleUrls: ['./editardia.component.css']
})

export class EditardiaComponent implements OnInit{

  Listadoalimentacion:any = [];

  dia:Dia={
    id_dia:0,
    fecha:'',
    kilocalorias:0,
    fibra:'',
    grasa:'',
    carbohidratos:'',
    proteina:'',
    id_alimentacion:0
  }

  constructor(private readonly alimentacionService:AlimentacionService,
    private readonly diaService:DiaService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getdia(params['id']);
        }
      );

      this.loadlistaralimentaciones();
    }

    getdia(id:number){
      this.diaService.Getdia(id).subscribe(
      data =>{
        this.dia = data;
      }
      );
    }

    loadlistaralimentaciones(){
      return this.alimentacionService.Getalimentaciones().subscribe((data:{}) => {
        this.Listadoalimentacion = data;
      })
      }


    update(){
      this.diaService.Updatedia(this.dia).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }
}









