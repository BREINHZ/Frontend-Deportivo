import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dia_alimento } from 'src/app/Modelo/dia_alimento';
import { AlimentoService } from 'src/app/Services/alimento.service';
import { DiaService } from 'src/app/Services/dia.service';
import { DiaalimentoService } from 'src/app/Services/diaalimento.service';

@Component({
  selector: 'app-editardiaalimento',
  templateUrl: './editardiaalimento.component.html',
  styleUrls: ['./editardiaalimento.component.css']
})
export class EditardiaalimentoComponent implements OnInit{

  Listadoalimentos:any = [];
  Listadodias:any = [];


  dia_alimento:Dia_alimento={
    id:0,
    id_alimento:0,
    id_dia:0
  }

  constructor(private readonly diaService:DiaService,
    private readonly alimentoService:AlimentoService,
    private readonly diaalimentoService:DiaalimentoService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getdiaalimento(params['id']);
        }
      );

      this.loadlistaralimentos();
      this.loadlistardias();
    }

    getdiaalimento(id:number){
      this.diaalimentoService.Getdiaalimento(id).subscribe(
      data =>{
        this.dia_alimento = data;
      }
      );
    }

    loadlistaralimentos(){
      return this.alimentoService.Getalimentos().subscribe((data:{}) => {
        this.Listadoalimentos = data;
      })
      }

      loadlistardias(){
        return this.diaService.Getdias().subscribe((data:{}) => {
          this.Listadodias = data;
        })
        }

    update(){
      this.diaalimentoService.Updatediaalimento(this.dia_alimento).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }
}









