import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//se debe importar aqui el  BrowserAnimationsModule

import { AppComponent } from './app.component';

//Modulo personalizado

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

import { VentasModule } from './ventas/ventas.module';

// cambiar el locale de la app
import  localEs  from '@angular/common/locales/es-EC'; //español de ecuador
import  localFr  from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localEs );
registerLocaleData( localFr );




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule, //Mi modulo necesita saber las rutas de mi aplicacion
    SharedModule,
    VentasModule
    
  

  ],
  providers: [ { provide: LOCALE_ID, useValue:'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
