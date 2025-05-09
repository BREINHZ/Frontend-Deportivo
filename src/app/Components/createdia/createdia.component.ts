import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlimentacionService } from 'src/app/Services/alimentacion.service';
import { DiaService } from 'src/app/Services/dia.service';

@Component({
  selector: 'app-createdia',
  templateUrl: './createdia.component.html',
  styleUrls: ['./createdia.component.css']
})
export class CreatediaComponent implements OnInit{

  diaForm:any=FormGroup;
  Listadoalimentacion:any = [];

  ngOnInit(){
    this.listadoalimentacion();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public alimentacionService:AlimentacionService,
    public diaService:DiaService
  ){}


  listadoalimentacion(){
    return this.alimentacionService.Getalimentaciones().subscribe((data:{}) => {
      this.Listadoalimentacion = data
    })
  }

  create(){
    this.diaForm = this.fb.group({
      fecha:['', Validators.required],
      kilocalorias:['', Validators.required],
      fibra:['', Validators.required],
      grasa:['', Validators.required],
      carbohidratos:['', Validators.required],
      proteina:['', Validators.required],
      id_alimentacion:['', Validators.required]
    });
  }

  submitForm(){

    this.diaService.Createdia(this.diaForm.value).subscribe((res) =>{
      console.log('Dia registrado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}
}

