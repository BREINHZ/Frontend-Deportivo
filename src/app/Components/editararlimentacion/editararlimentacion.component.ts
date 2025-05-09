import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimentacion } from 'src/app/Modelo/alimentacion';
import { AlimentacionService } from 'src/app/Services/alimentacion.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-editararlimentacion',
  templateUrl: './editararlimentacion.component.html',
  styleUrls: ['./editararlimentacion.component.css']
})

export class EditararlimentacionComponent implements OnInit{

  Listadousuarios:any = [];


  alimentacion:Alimentacion={
    id_usuario:0,
    numero_dia:''
  }

  constructor(private readonly usuarioService:UsuarioService,
    private readonly alimentacionService:AlimentacionService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getalimentacion(params['id']);
        }
      );

      this.loadlistarusuarios();
    }

    getalimentacion(id:number){
      this.alimentacionService.Getalimentacion(id).subscribe(
      data =>{
        this.alimentacion = data;
      }
      );
    }

    loadlistarusuarios(){
      return this.usuarioService.Getusuarios().subscribe((data:{}) => {
        this.Listadousuarios = data;
      })
      }


    update(){
      this.alimentacionService.Updateealimentacion(this.alimentacion).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }
}








