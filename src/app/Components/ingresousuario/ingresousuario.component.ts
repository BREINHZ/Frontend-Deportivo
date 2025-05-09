import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariologinService } from 'src/app/Services/usuariologin.service';

@Component({
  selector: 'app-ingresousuario',
  templateUrl: './ingresousuario.component.html',
  styleUrls: ['./ingresousuario.component.css']
})
export class IngresousuarioComponent implements OnInit {

  passwordForm:any= FormGroup;
  datos: any;
  mensajeError: string = '';

  constructor(private usuariologinService: UsuariologinService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addpassword();
  }

  addpassword() {
    this.passwordForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.usuariologinService.ingresar(this.passwordForm.value)
      .subscribe(response => {
        this.datos = response;
        this.router.navigate(['/ruta-despues-de-login']); // Redirecciona a otra ruta después de login
      }, error => {
        if (error.status === 400) {
          this.mensajeError = 'Credenciales incorrectas';
        } else {
          this.mensajeError = 'Error desconocido';
        }
      });
  }

}



