import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuariodieta } from 'src/app/Modelo/usuariodieta';
import { DietaService } from 'src/app/Services/dieta.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuariodietaService } from 'src/app/Services/usuariodieta.service';

@Component({
  selector: 'app-editardietausuario',
  templateUrl: './editardietausuario.component.html',
  styleUrls: ['./editardietausuario.component.css']
})
export class EditardietausuarioComponent implements OnInit{

  Listadousuarios:any = [];
  Listadodietas:any = [];


  usuario_dieta:Usuariodieta={
    id:0,
    id_dieta:0,
    id_usuario:0
  }

  constructor(private readonly usuariodietaService:UsuariodietaService,
    private readonly usuarioService:UsuarioService,
    private readonly dietaService:DietaService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getusuariodieta(params['id']);
        }
      );

      this.loadlistardietas();
      this.loadlistarusuarios();
    }

    getusuariodieta(id:number){
      this.usuariodietaService.Getusuariodieta(id).subscribe(
      data =>{
        this.usuario_dieta = data;
      }
      );
    }

    loadlistardietas(){
      return this.dietaService.Getdietas().subscribe((data:{}) => {
        this.Listadodietas = data;
      })
      }

      loadlistarusuarios(){
        return this.usuarioService.Getusuarios().subscribe((data:{}) => {
          this.Listadousuarios = data;
        })
        }

    update(){
      this.usuariodietaService.Updateusuariodieta(this.usuario_dieta).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }

}








