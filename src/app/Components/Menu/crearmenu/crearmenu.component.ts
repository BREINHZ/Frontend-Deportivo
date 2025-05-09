import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-crearmenu',
  templateUrl: './crearmenu.component.html',
  styleUrls: ['./crearmenu.component.css']
})
export class CrearmenuComponent implements OnInit {
  menuForm:any= FormGroup;

  ngOnInit() {
    this.addmenulista();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public menuService: MenuService
  ) { }


addmenulista() {
    this.menuForm = this.fb.group({
      desayuno: ['', Validators.required],
      cena: ['', Validators.required],
      merienda: ['', Validators.required],
      almuerzo: ['', Validators.required]
    });
  }

  submitForm() {
    this.menuService.Createmenu(this.menuForm.value).subscribe((res) => {
      console.log('Menú agregado!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
  }
}

