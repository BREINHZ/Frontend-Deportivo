import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/Modelo/plan';
import { PlanService } from 'src/app/Services/plan.service';

@Component({
  selector: 'app-editarplan',
  templateUrl: './editarplan.component.html',
  styleUrls: ['./editarplan.component.css']
})

export class EditarplanComponent implements OnInit{


  Listadoplanes:any = [];

  plan:Plan={
    id_plan:0,
    kilocalorias:'',
    fibra:'',
    grasa:'',
    carbohidratos:'',
    proteina:''
  }

  constructor(private readonly planService:PlanService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getplan(params['id']);
        }
      );
    }

    getplan(id:number){
      this.planService.Getplan(id).subscribe(
      data =>{
        this.plan = data;
      }
      );
    }


      update(){
        this.planService.Updateplan(this.plan).subscribe(
          () => {
            this.router.navigate(["/listarplanesdeportivos"])
          }
        );
      }

}
