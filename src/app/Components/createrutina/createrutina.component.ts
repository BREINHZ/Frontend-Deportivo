import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutinaService } from 'src/app/Services/rutina.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-createrutina',
  templateUrl: './createrutina.component.html',
  styleUrls: ['./createrutina.component.css']
})
export class CreaterutinaComponent implements OnInit{

  rutinaForm:any=FormGroup;
  Listadousuarios:any = [];

  ngOnInit(){
    this.listadousuarios();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public usuarioService:UsuarioService,
    public rutinaService:RutinaService
  ){}


  listadousuarios(){
    return this.usuarioService.Getusuarios().subscribe((data:{}) => {
      this.Listadousuarios = data
    })
  }

  create(){
    this.rutinaForm = this.fb.group({
      nombre:['', Validators.required],
      tiempo_total:['', Validators.required],
      tiempo_descanso:['', Validators.required],
      dificultad:['', Validators.required],
      id_usuario:['', Validators.required]
    });
  }

  submitForm(){

    this.rutinaService.Createrutina(this.rutinaForm.value).subscribe((res) =>{
      console.log('Usuario registrado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}

}

