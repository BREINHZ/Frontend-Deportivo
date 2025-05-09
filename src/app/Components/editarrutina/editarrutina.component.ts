import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutina } from 'src/app/Modelo/rutina';
import { RutinaService } from 'src/app/Services/rutina.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-editarrutina',
  templateUrl: './editarrutina.component.html',
  styleUrls: ['./editarrutina.component.css']
})


export class EditarrutinaComponent implements OnInit{

  Listadousuarios:any = [];

  rutina:Rutina={
    id_rutina:0,
    id_usuario:0,
    dificultad:'',
    tiempo_descanso:0,
    tiempo_total:0,
    nombre:'',
  }

  constructor(private readonly rutinaService:RutinaService,
    private readonly usuarioService:UsuarioService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getrutina(params['id']);
        }
      );

      this.loadlistarusuarios();
    }

    getrutina(id:number){
      this.rutinaService.Getrutina(id).subscribe(
      data =>{
        this.rutina = data;
      }
      );
    }

    loadlistarusuarios(){
      return this.usuarioService.Getusuarios().subscribe((data:{}) => {
        this.Listadousuarios = data;
      })
      }


    update(){
      this.rutinaService.Updaterutina(this.rutina).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }
}
