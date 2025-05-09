import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DietaService } from 'src/app/Services/dieta.service';

@Component({
  selector: 'app-creardieta',
  templateUrl: './creardieta.component.html',
  styleUrls: ['./creardieta.component.css']
})

export class CreardietaComponent implements OnInit{

  dietaForm:any= FormGroup;

  ngOnInit() {
    this.addDieta();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public dietaService: DietaService
  ) { }

  addDieta() {
    this.dietaForm = this.fb.group({
      nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  submitForm() {
    this.dietaService.Createdieta(this.dietaForm.value).subscribe((res) => {
      console.log('Dieta agregada!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
  }

}

