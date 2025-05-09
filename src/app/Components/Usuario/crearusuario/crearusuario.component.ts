import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from 'src/app/Services/plan.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})

export class CrearusuarioComponent implements OnInit{

  usuarioForm:any=FormGroup;
  Listadoplan:any = [];

  ngOnInit(){
    this.listadoplan();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public planService:PlanService,
    public usuarioService:UsuarioService
  ){}


  listadoplan(){
    return this.planService.Getplanes().subscribe((data:{}) => {
      this.Listadoplan = data
    })
  }

  create(){
    this.usuarioForm = this.fb.group({
      username:['', Validators.required],
      fechacreacion:['', Validators.required],
      email:['', Validators.required],
      sexo:['', Validators.required],
      estatura:['', Validators.required],
      pesoactual:['', Validators.required],
      pesodeseado:['', Validators.required],
      password:['', Validators.required],
      fechanacimiento:['', Validators.required],
      id_plan:['', Validators.required]
    });
  }

  submitForm(){

    this.usuarioService.Crearusuario(this.usuarioForm.value).subscribe((res) =>{
      console.log('Usuario registrado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}
}

