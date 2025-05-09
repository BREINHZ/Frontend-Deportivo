import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DietaService } from 'src/app/Services/dieta.service';
import { DietamenuService } from 'src/app/Services/dietamenu.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-creardietamenu',
  templateUrl: './creardietamenu.component.html',
  styleUrls: ['./creardietamenu.component.css']
})

export class CreardietamenuComponent implements OnInit{

  dietamenuForm:any=FormGroup;
  Listadodieta:any = [];
  Listadomenu:any = [];

  ngOnInit(){
    this.listadodietas();
    this.listadomenus();
    this.create();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    public dietaService:DietaService,
    public menuService:MenuService,
    public dietamenuService:DietamenuService
  ){}

  listadodietas(){
    return this.dietaService.Getdietas().subscribe((data:{}) => {
      this.Listadodieta = data
    })
  }

  listadomenus(){
    return this.menuService.Getmenus().subscribe((data:{}) => {
      this.Listadomenu = data
    })
  }


  create(){
    this.dietamenuForm = this.fb.group({
      id_dieta:['', Validators.required],
      id_menu:['', Validators.required]
    });
  }

  submitForm(){

    this.dietamenuService.Creardietamenu(this.dietamenuForm.value).subscribe((res) =>{
      console.log('Dieta menú registrada!');
      this.ngZone.run(() => this.router.navigateByUrl('/createplandeportivo'));
    });
}

}
