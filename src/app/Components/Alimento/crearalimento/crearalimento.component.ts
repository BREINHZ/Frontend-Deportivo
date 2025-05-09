import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlimentoService } from 'src/app/Services/alimento.service';

@Component({
  selector: 'app-crearalimento',
  templateUrl: './crearalimento.component.html',
  styleUrls: ['./crearalimento.component.css']
})
export class CrearalimentoComponent implements OnInit{

  alimentoForm:any= FormGroup;

  ngOnInit() {
    this.addAlimento();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public alimentoService: AlimentoService
  ) { }

  addAlimento() {
    this.alimentoForm = this.fb.group({
      nombre: ['', Validators.required],
      proteina: ['', Validators.required],
      grasa: ['', Validators.required],
      carbohidrato: ['', Validators.required],
      fibra: ['', Validators.required],
      kilocalorias: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }

  submitForm() {
    this.alimentoService.Createalimento(this.alimentoForm.value).subscribe((res) => {
      console.log('Alimento agregado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
  }

}
