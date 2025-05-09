import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/Modelo/menu';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-editarmenu',
  templateUrl: './editarmenu.component.html',
  styleUrls: ['./editarmenu.component.css']
})


export class EditarmenuComponent implements OnInit{

  Listadomenus:any = [];

  menu:Menu={
    id_menu:0,
    desayuno:'',
    cena:'',
    merienda:'',
    almuerzo:''
  }

  constructor(private readonly menuService:MenuService,
    private readonly router: Router, private readonly aRoute: ActivatedRoute){}

    ngOnInit(): void{
      this.aRoute.params.subscribe(
        params => {
          this.getmenu(params['id']);
        }
      );
    }

    getmenu(id:number){
      this.menuService.Getmenu(id).subscribe(
      data =>{
        this.menu = data;
      }
      );
    }


      update(){
        this.menuService.Updatemenu(this.menu).subscribe(
          () => {
            this.router.navigate(["/createplandeportivo"])
          }
        );
      }

}
