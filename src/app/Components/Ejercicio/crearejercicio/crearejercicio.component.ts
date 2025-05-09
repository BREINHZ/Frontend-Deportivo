import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EjercicioService } from 'src/app/Services/ejercicio.service';

@Component({
  selector: 'app-crearejercicio',
  templateUrl: './crearejercicio.component.html',
  styleUrls: ['./crearejercicio.component.css']
})
export class CrearejercicioComponent implements OnInit{

  ejercicioForm:any= FormGroup;

  ngOnInit() {
    this.addEjercicio();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public ejercicioService: EjercicioService
  ) { }


  addEjercicio() {
    this.ejercicioForm = this.fb.group({
      nombre: ['', Validators.required],
      dificultad: ['', Validators.required],
      id_youtube: ['', Validators.required],
      imagen: ['', Validators.required],
      estiramiento: ['', Validators.required]
    });
  }

  submitForm() {
    this.ejercicioService.Crearejercicio(this.ejercicioForm.value).subscribe((res) => {
      console.log('Ejercicio agregado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
  }

}
