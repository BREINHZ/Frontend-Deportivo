import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/Services/plan.service';

@Component({
  selector: 'app-listarplanes',
  templateUrl: './listarplanes.component.html',
  styleUrls: ['./listarplanes.component.css']
})

export class ListarplanesComponent implements OnInit{

  Listarplanes:any = [];

  ngOnInit(){
    this.loadlistarplanes();
  }

  constructor(public planService:PlanService){}

  loadlistarplanes(){
  return this.planService.Getplanes().subscribe((data:{}) => {
    this.Listarplanes= data;
  })
  }

  deleteplan(id:number){

  if(confirm('Está seguro de eliminar el plan?')){
    this.planService.Deleteplan(id)
    .subscribe(res => {
      this.loadlistarplanes();
    });
  }
  }

}
