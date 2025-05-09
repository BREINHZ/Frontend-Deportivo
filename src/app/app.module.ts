import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanService } from './Services/plan.service';

import { CrearalimentoComponent } from './Components/Alimento/crearalimento/crearalimento.component';
import { EditaralimentoComponent } from './Components/Alimento/editaralimento/editaralimento.component';
import { ListaralimentoComponent } from './Components/Alimento/listaralimento/listaralimento.component';
import { CreardiaalimentoComponent } from './Components/creardiaalimento/creardiaalimento.component';
import { CreardietausuarioComponent } from './Components/creardietausuario/creardietausuario.component';
import { CreatealimentacionComponent } from './Components/createalimentacion/createalimentacion.component';
import { CreatediaComponent } from './Components/createdia/createdia.component';
import { CreaterutinaComponent } from './Components/createrutina/createrutina.component';
import { CreaterutinaejercicioComponent } from './Components/createrutinaejercicio/createrutinaejercicio.component';
import { CreardietaComponent } from './Components/Dieta/creardieta/creardieta.component';
import { EditardietaComponent } from './Components/Dieta/editardieta/editardieta.component';
import { ListardietaComponent } from './Components/Dieta/listardieta/listardieta.component';
import { CreardietamenuComponent } from './Components/Dietamenu/creardietamenu/creardietamenu.component';
import { EditardietamenuComponent } from './Components/Dietamenu/editardietamenu/editardietamenu.component';
import { ListardietamenuComponent } from './Components/Dietamenu/listardietamenu/listardietamenu.component';
import { EditararlimentacionComponent } from './Components/editararlimentacion/editararlimentacion.component';
import { EditardiaComponent } from './Components/editardia/editardia.component';
import { EditardiaalimentoComponent } from './Components/editardiaalimento/editardiaalimento.component';
import { EditardietausuarioComponent } from './Components/editardietausuario/editardietausuario.component';
import { EditarrutinaComponent } from './Components/editarrutina/editarrutina.component';
import { EditarrutinaejercicioComponent } from './Components/editarrutinaejercicio/editarrutinaejercicio.component';
import { CrearejercicioComponent } from './Components/Ejercicio/crearejercicio/crearejercicio.component';
import { EditarejercicioComponent } from './Components/Ejercicio/editarejercicio/editarejercicio.component';
import { ListarejerciciosComponent } from './Components/Ejercicio/listarejercicios/listarejercicios.component';
import { ListaralimentacionComponent } from './Components/listaralimentacion/listaralimentacion.component';
import { ListardiaalimentoComponent } from './Components/listardiaalimento/listardiaalimento.component';
import { ListardiasComponent } from './Components/listardias/listardias.component';
import { ListardietausuarioComponent } from './Components/listardietausuario/listardietausuario.component';
import { ListarrutinaComponent } from './Components/listarrutina/listarrutina.component';
import { ListarrutinaejercicioComponent } from './Components/listarrutinaejercicio/listarrutinaejercicio.component';
import { CrearmenuComponent } from './Components/Menu/crearmenu/crearmenu.component';
import { EditarmenuComponent } from './Components/Menu/editarmenu/editarmenu.component';
import { ListarmenusComponent } from './Components/Menu/listarmenus/listarmenus.component';
import { CreateplanComponent } from './Components/Plan/createplan/createplan.component';
import { EditarplanComponent } from './Components/Plan/editarplan/editarplan.component';
import { ListarplanesComponent } from './Components/Plan/listarplanes/listarplanes.component';
import { RecuperarpasswordComponent } from './Components/recuperarpassword/recuperarpassword.component';
import { CrearusuarioComponent } from './Components/Usuario/crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './Components/Usuario/editarusuario/editarusuario.component';
import { ListarusuarioComponent } from './Components/Usuario/listarusuario/listarusuario.component';
import { IngresousuarioComponent } from './Components/ingresousuario/ingresousuario.component';
import { ListadousuarioseliminadosComponent } from './Components/listadousuarioseliminados/listadousuarioseliminados.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateplanComponent,
    ListarplanesComponent,
    EditarplanComponent,
    CrearmenuComponent,
    ListarmenusComponent,
    EditarmenuComponent,
    CreardietaComponent,
    ListardietaComponent,
    EditardietaComponent,
    CrearalimentoComponent,
    ListaralimentoComponent,
    EditaralimentoComponent,
    CrearejercicioComponent,
    ListarejerciciosComponent,
    EditarejercicioComponent,
    CreardietamenuComponent,
    ListardietamenuComponent,
    EditardietamenuComponent,
    CrearusuarioComponent,
    ListarusuarioComponent,
    EditarusuarioComponent,
    CreardietausuarioComponent,
    ListardietausuarioComponent,
    EditardietausuarioComponent,
    CreaterutinaComponent,
    ListarrutinaComponent,
    EditarrutinaComponent,
    CreaterutinaejercicioComponent,
    ListarrutinaejercicioComponent,
    EditarrutinaejercicioComponent,
    CreatealimentacionComponent,
    ListaralimentacionComponent,
    EditararlimentacionComponent,
    CreatediaComponent,
    ListardiasComponent,
    EditardiaComponent,
    CreardiaalimentoComponent,
    ListardiaalimentoComponent,
    EditardiaalimentoComponent,
    RecuperarpasswordComponent,
    IngresousuarioComponent,
    ListadousuarioseliminadosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
