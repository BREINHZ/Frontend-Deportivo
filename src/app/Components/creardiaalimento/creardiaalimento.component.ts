import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlimentoService } from 'src/app/Services/alimento.service';
import { DiaService } from 'src/app/Services/dia.service';
import { DiaalimentoService } from 'src/app/Services/diaalimento.service';

@Component({
  selector: 'app-creardiaalimento',
  templateUrl: './creardiaalimento.component.html',
  styleUrls: ['./creardiaalimento.component.css']
})

export class CreardiaalimentoComponent implements OnInit{

  diaalimentoForm:any=FormGroup;
  Listadodia:any = [];
  Listadoalimento:any = [];

  ngOnInit(){
    this.listadodias();
    this.listadoalimentos();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public diaService:DiaService,
    public alimentoService:AlimentoService,
    public diaalimentoService:DiaalimentoService
  ){}

  listadodias(){
    return this.diaService.Getdias().subscribe((data:{}) => {
      this.Listadodia = data
    })
  }

  listadoalimentos(){
    return this.alimentoService.Getalimentos().subscribe((data:{}) => {
      this.Listadoalimento = data
    })
  }


  create(){
    this.diaalimentoForm = this.fb.group({
      id_dia:['', Validators.required],
      id_alimento:['', Validators.required]
    });
  }

  submitForm(){

    this.diaalimentoService.Creatediaalimento(this.diaalimentoForm.value).subscribe((res) =>{
      console.log('Día alimento registrado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}

}

