import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/usuario';
import { PlanService } from 'src/app/Services/plan.service';
import { UsuarioService } from 'src/app/Services/usuario.service';


@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})

export class EditarusuarioComponent implements OnInit {

  Listadoplan:any = [];


  usuario:Usuario={
    id_usuario:0,
    username:'',
    fechacreacion:'',
    email:'',
    sexo:'',
    estatura:0,
    pesoactual:0,
    pesodeseado:0,
    password:'',
    fechanacimiento:'',
    id_plan:0,
  }

  constructor(private readonly planService:PlanService,
    private readonly usuarioService:UsuarioService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getusuario(params['id']);
        }
      );

      this.loadlistarplanes();
    }

    getusuario(id:number){
      this.usuarioService.Getusuario(id).subscribe(
      data =>{
        this.usuario = data;
      }
      );
    }

    loadlistarplanes(){
      return this.planService.Getplanes().subscribe((data:{}) => {
        this.Listadoplan = data;
      })
      }


    update(){
      this.usuarioService.Updateusuario(this.usuario).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }

}








