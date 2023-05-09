import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';


const routes: Routes = [

  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full' //cuando el phat ese basio se va a moestrar esta pagina
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path:'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: '' // me redireciona al path vacio en este a basicos
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)  //no olvidar xd
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
