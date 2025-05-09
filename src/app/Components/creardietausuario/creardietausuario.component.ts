import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DietaService } from 'src/app/Services/dieta.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuariodietaService } from 'src/app/Services/usuariodieta.service';

@Component({
  selector: 'app-creardietausuario',
  templateUrl: './creardietausuario.component.html',
  styleUrls: ['./creardietausuario.component.css']
})

export class CreardietausuarioComponent implements OnInit{

  dietausuarioForm:any=FormGroup;
  Listadodieta:any = [];
  Listadousuario:any = [];

  ngOnInit(){
    this.listadodietas();
    this.listadousuarios();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public dietaService:DietaService,
    public usuarioService:UsuarioService,
    public usuariodietaService:UsuariodietaService
  ){}

  listadodietas(){
    return this.dietaService.Getdietas().subscribe((data:{}) => {
      this.Listadodieta = data
    })
  }

  listadousuarios(){
    return this.usuarioService.Getusuarios().subscribe((data:{}) => {
      this.Listadousuario = data
    })
  }


  create(){
    this.dietausuarioForm = this.fb.group({
      id_dieta:['', Validators.required],
      id_usuario:['', Validators.required]
    });
  }

  submitForm(){

    this.usuariodietaService.Crearusuariodieta(this.dietausuarioForm.value).subscribe((res) =>{
      console.log('Usuario dieta registrado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}

}
