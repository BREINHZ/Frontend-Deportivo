import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OlvidopasswordService } from 'src/app/Services/olvidopassword.service';

@Component({
  selector: 'app-recuperarpassword',
  templateUrl: './recuperarpassword.component.html',
  styleUrls: ['./recuperarpassword.component.css']
})
export class RecuperarpasswordComponent implements OnInit{
  passwordForm:any= FormGroup;
  mensaje: string = '';

  ngOnInit() {
    this.addpassword();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public olvidopasswordService: OlvidopasswordService
  ) { }

  addpassword() {
    this.passwordForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  submitForm() {
    this.olvidopasswordService.Recuperarpassword(this.passwordForm.value).subscribe((res) => {
      this.mensaje = 'Password cambiada con éxito!';
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }, (error) => {
      console.log(error);
      if (error.error === 'Password cambiada con éxito!') {
        this.mensaje = 'Password cambiada con éxito!';
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        this.mensaje = 'Password cambiada con éxito';
      }
    });
  }
}
