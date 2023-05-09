import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent  {

  enMayusculas: boolean = true;
  ordenarPor: string = ''; //va a permitir determinar el boton que se apreto

  heroe: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Iroman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]
 

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrdem( valor:string ){
    this.ordenarPor = valor;
  }


}
