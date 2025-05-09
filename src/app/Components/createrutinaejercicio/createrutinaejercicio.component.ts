import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EjercicioService } from 'src/app/Services/ejercicio.service';
import { RutinaService } from 'src/app/Services/rutina.service';
import { RutinaejercicioService } from 'src/app/Services/rutinaejercicio.service';


@Component({
  selector: 'app-createrutinaejercicio',
  templateUrl: './createrutinaejercicio.component.html',
  styleUrls: ['./createrutinaejercicio.component.css']
})

export class CreaterutinaejercicioComponent implements OnInit{

  rutinaejercicioForm:any=FormGroup;
  Listadorutina:any = [];
  Listadoejercicio:any = [];

  ngOnInit(){
    this.listadorutinas();
    this.listadoejercicios();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public rutinaService:RutinaService,
    public ejercicioService:EjercicioService,
    public rutinaejercicioService:RutinaejercicioService
  ){}

  listadorutinas(){
    return this.rutinaService.Getrutinas().subscribe((data:{}) => {
      this.Listadorutina = data
    })
  }

  listadoejercicios(){
    return this.ejercicioService.Getejercicios().subscribe((data:{}) => {
      this.Listadoejercicio = data
    })
  }


  create(){
    this.rutinaejercicioForm = this.fb.group({
      id_rutina:['', Validators.required],
      id_ejercicio:['', Validators.required]
    });
  }

  submitForm(){

    this.rutinaejercicioService.Createrutinaejercicio(this.rutinaejercicioForm.value).subscribe((res) =>{
      console.log('Rutina ejercicio registrada!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}
}

