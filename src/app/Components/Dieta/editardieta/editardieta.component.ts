import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dieta } from 'src/app/Modelo/dieta';
import { DietaService } from 'src/app/Services/dieta.service';

@Component({
  selector: 'app-editardieta',
  templateUrl: './editardieta.component.html',
  styleUrls: ['./editardieta.component.css']
})
export class EditardietaComponent implements OnInit{

  Listadomenus:any = [];

  dieta:Dieta={
    id_dieta:0,
    nombre:'',
    objetivo:'',
    descripcion:''
  }

  constructor(private readonly dietaService:DietaService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getdieta(params['id']);
        }
      );
    }

    getdieta(id:number){
      this.dietaService.Getdieta(id).subscribe(
      data =>{
        this.dieta = data;
      }
      );
    }


      update(){
        this.dietaService.Updatedieta(this.dieta).subscribe(
          () => {
            this.router.navigate(["/createplandeportivo"])
          }
        );
      }

}
