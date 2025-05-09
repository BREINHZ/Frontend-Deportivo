import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dieta_menu } from 'src/app/Modelo/dieta_menu';
import { DietaService } from 'src/app/Services/dieta.service';
import { DietamenuService } from 'src/app/Services/dietamenu.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-editardietamenu',
  templateUrl: './editardietamenu.component.html',
  styleUrls: ['./editardietamenu.component.css']
})

export class EditardietamenuComponent implements OnInit{

  Listadomenus:any = [];
  Listadodietas:any = [];


  dieta_menu:Dieta_menu={
    id:0,
    id_dieta:0,
    id_menu:0
  }

  constructor(private readonly dietamenuService:DietamenuService,
    private readonly dietaService:DietaService,
    private readonly menuService:MenuService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getdietamenu(params['id']);
        }
      );

      this.loadlistardietas();
      this.loadlistarmenus();
    }

    getdietamenu(id:number){
      this.dietamenuService.Getdietamenu(id).subscribe(
      data =>{
        this.dieta_menu = data;
      }
      );
    }

    loadlistardietas(){
      return this.dietaService.Getdietas().subscribe((data:{}) => {
        this.Listadodietas = data;
      })
      }

      loadlistarmenus(){
        return this.menuService.Getmenus().subscribe((data:{}) => {
          this.Listadomenus = data;
        })
        }

    update(){
      this.dietamenuService.Updatedietamenu(this.dieta_menu).subscribe(
        () => {
          this.router.navigate(["/createplandeportivo"])
        }
      );
    }

}








