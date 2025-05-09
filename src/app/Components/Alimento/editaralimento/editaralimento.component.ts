import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimento } from 'src/app/Modelo/alimento';
import { AlimentoService } from 'src/app/Services/alimento.service';

@Component({
  selector: 'app-editaralimento',
  templateUrl: './editaralimento.component.html',
  styleUrls: ['./editaralimento.component.css']
})
export class EditaralimentoComponent implements OnInit{

  Listadomenus:any = [];

  alimento:Alimento={
    id_alimento:0,
    nombre:'',
    proteina:'',
    grasa:'',
    carbohidrato:'',
    fibra:'',
    kilocalorias:0,
    cantidad:0
  }

  constructor(private readonly alimentoService:AlimentoService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getalimento(params['id']);
        }
      );
    }

    getalimento(id:number){
      this.alimentoService.Getalimento(id).subscribe(
      data =>{
        this.alimento = data;
      }
      );
    }


      update(){
        this.alimentoService.Updatealimento(this.alimento).subscribe(
          () => {
            this.router.navigate(["/createplandeportivo"])
          }
        );
      }

}
