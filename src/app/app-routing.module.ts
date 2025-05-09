import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearalimentoComponent } from './Components/Alimento/crearalimento/crearalimento.component';
import { EditaralimentoComponent } from './Components/Alimento/editaralimento/editaralimento.component';
import { ListaralimentoComponent } from './Components/Alimento/listaralimento/listaralimento.component';
import { CreardietaComponent } from './Components/Dieta/creardieta/creardieta.component';
import { EditardietaComponent } from './Components/Dieta/editardieta/editardieta.component';
import { ListardietaComponent } from './Components/Dieta/listardieta/listardieta.component';
import { CreardietamenuComponent } from './Components/Dietamenu/creardietamenu/creardietamenu.component';
import { EditardietamenuComponent } from './Components/Dietamenu/editardietamenu/editardietamenu.component';
import { ListardietamenuComponent } from './Components/Dietamenu/listardietamenu/listardietamenu.component';
import { CrearejercicioComponent } from './Components/Ejercicio/crearejercicio/crearejercicio.component';
import { EditarejercicioComponent } from './Components/Ejercicio/editarejercicio/editarejercicio.component';
import { ListarejerciciosComponent } from './Components/Ejercicio/listarejercicios/listarejercicios.component';
import { CrearmenuComponent } from './Components/Menu/crearmenu/crearmenu.component';
import { EditarmenuComponent } from './Components/Menu/editarmenu/editarmenu.component';
import { ListarmenusComponent } from './Components/Menu/listarmenus/listarmenus.component';
import { CreateplanComponent } from './Components/Plan/createplan/createplan.component';
import { EditarplanComponent } from './Components/Plan/editarplan/editarplan.component';
import { ListarplanesComponent } from './Components/Plan/listarplanes/listarplanes.component';
import { CrearusuarioComponent } from './Components/Usuario/crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './Components/Usuario/editarusuario/editarusuario.component';
import { ListarusuarioComponent } from './Components/Usuario/listarusuario/listarusuario.component';
import { CreardiaalimentoComponent } from './Components/creardiaalimento/creardiaalimento.component';
import { CreardietausuarioComponent } from './Components/creardietausuario/creardietausuario.component';
import { CreatealimentacionComponent } from './Components/createalimentacion/createalimentacion.component';
import { CreatediaComponent } from './Components/createdia/createdia.component';
import { CreaterutinaComponent } from './Components/createrutina/createrutina.component';
import { CreaterutinaejercicioComponent } from './Components/createrutinaejercicio/createrutinaejercicio.component';
import { EditararlimentacionComponent } from './Components/editararlimentacion/editararlimentacion.component';
import { EditardiaComponent } from './Components/editardia/editardia.component';
import { EditardiaalimentoComponent } from './Components/editardiaalimento/editardiaalimento.component';
import { EditardietausuarioComponent } from './Components/editardietausuario/editardietausuario.component';
import { EditarrutinaComponent } from './Components/editarrutina/editarrutina.component';
import { EditarrutinaejercicioComponent } from './Components/editarrutinaejercicio/editarrutinaejercicio.component';
import { IngresousuarioComponent } from './Components/ingresousuario/ingresousuario.component';
import { ListadousuarioseliminadosComponent } from './Components/listadousuarioseliminados/listadousuarioseliminados.component';
import { ListaralimentacionComponent } from './Components/listaralimentacion/listaralimentacion.component';
import { ListardiaalimentoComponent } from './Components/listardiaalimento/listardiaalimento.component';
import { ListardiasComponent } from './Components/listardias/listardias.component';
import { ListardietausuarioComponent } from './Components/listardietausuario/listardietausuario.component';
import { ListarrutinaComponent } from './Components/listarrutina/listarrutina.component';
import { ListarrutinaejercicioComponent } from './Components/listarrutinaejercicio/listarrutinaejercicio.component';
import { RecuperarpasswordComponent } from './Components/recuperarpassword/recuperarpassword.component';



const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'createplandeportivo'},
  { path: 'createplandeportivo', component:CreateplanComponent},
  { path: 'listarplanesdeportivos', component:ListarplanesComponent},
  { path: 'editarplan/:id', component:EditarplanComponent},
  { path: 'createmenudeportivo', component:CrearmenuComponent},
  { path: 'listarmenusdeportivos', component:ListarmenusComponent},
  { path: 'editarmenudeportivo/:id', component:EditarmenuComponent},
  { path: 'createdietadeportiva', component:CreardietaComponent},
  { path: 'listardietasdeportivas', component:ListardietaComponent},
  { path: 'editardietadeportiva/:id', component:EditardietaComponent},
  { path: 'createalimentodeportivo', component:CrearalimentoComponent},
  { path: 'listaralimentosdeportivos', component:ListaralimentoComponent},
  { path: 'editaralimento/:id', component:EditaralimentoComponent},
  { path: 'crearejerciciodeportivo', component:CrearejercicioComponent},
  { path: 'listarejeciciosdeportivos', component:ListarejerciciosComponent},
  { path: 'editarejerciciodeportivo/:id', component:EditarejercicioComponent},
  { path: 'createdietamenu', component:CreardietamenuComponent},
  { path: 'listardietasmenusdeportivos', component:ListardietamenuComponent},
  { path: 'editardietamenudeportiva/:id', component:EditardietamenuComponent},
  { path: 'createusuariodeportivo', component:CrearusuarioComponent},
  { path: 'listarusuariosdeportivos', component:ListarusuarioComponent},
  { path: 'editarusuariodeportivo/:id', component:EditarusuarioComponent},
  { path: 'createdietausuariodeportivo', component:CreardietausuarioComponent},
  { path: 'listarusuariosdietasdeportivos', component:ListardietausuarioComponent},
  { path: 'editarusuariodietadeportivo/:id', component:EditardietausuarioComponent},
  { path: 'createrutinausuariosdeportivos', component:CreaterutinaComponent},
  { path: 'listarrutinasusuariosdeportivos', component:ListarrutinaComponent},
  { path: 'editarrutinadeportiva/:id', component:EditarrutinaComponent},
  { path: 'createrutinausejerciciosdeportivos', component:CreaterutinaejercicioComponent},
  { path: 'listarrutinasejerciciosdeportivos', component:ListarrutinaejercicioComponent},
  { path: 'editarrutinaejerciciodeportivo/:id', component:EditarrutinaejercicioComponent},
  { path: 'createalimentaciondeportiva', component:CreatealimentacionComponent},
  { path: 'listaralimentaciondeportiva', component:ListaralimentacionComponent},
  { path: 'editaralimentaciondeportiva/:id', component:EditararlimentacionComponent},
  { path: 'createdia', component:CreatediaComponent},
  { path: 'listardias', component:ListardiasComponent},
  { path: 'editardia/:id', component:EditardiaComponent},
  { path: 'creatediaalimento', component:CreardiaalimentoComponent},
  { path: 'listardiaalimento', component:ListardiaalimentoComponent},
  { path: 'editardiaalimento/:id', component:EditardiaalimentoComponent},
  { path: 'recuperarpasswordusuario', component:RecuperarpasswordComponent},
  { path: 'ingresousuariologin', component:IngresousuarioComponent},
  { path: 'usuariosdeportivoseliminados', component:ListadousuarioseliminadosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
