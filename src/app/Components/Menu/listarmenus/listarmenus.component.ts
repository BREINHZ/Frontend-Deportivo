import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-listarmenus',
  templateUrl: './listarmenus.component.html',
  styleUrls: ['./listarmenus.component.css']
})

export class ListarmenusComponent implements OnInit{

  Listarmenus:any = [];

  ngOnInit(){
    this.loadlistarmenus();
  }

  constructor(public menuService:MenuService){}

  loadlistarmenus(){
  return this.menuService.Getmenus().subscribe((data:{}) => {
    this.Listarmenus= data;
  })
  }

  deletemenu(id:number){

  if(confirm('Está seguro de eliminar el menú?')){
    this.menuService.Deletemenu(id)
    .subscribe(res => {
      this.loadlistarmenus();
    });
  }
  }

}
