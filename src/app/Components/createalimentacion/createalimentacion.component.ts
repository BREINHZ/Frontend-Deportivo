import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlimentacionService } from 'src/app/Services/alimentacion.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-createalimentacion',
  templateUrl: './createalimentacion.component.html',
  styleUrls: ['./createalimentacion.component.css']
})

export class CreatealimentacionComponent implements OnInit{

  alimentacionForm:any=FormGroup;
  Listadousuarios:any = [];

  ngOnInit(){
    this.listadousuarios();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public alimentacionService:AlimentacionService,
    public usuarioService:UsuarioService
  ){}


  listadousuarios(){
    return this.usuarioService.Getusuarios().subscribe((data:{}) => {
      this.Listadousuarios = data
    })
  }

  create(){
    this.alimentacionForm = this.fb.group({
      id_usuario:['', Validators.required],
      numero_dia:['', Validators.required]
    });
  }

  submitForm(){

    this.alimentacionService.Crearalimentacion(this.alimentacionForm.value).subscribe((res) =>{
      console.log('Alimentación registrada!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}
}

