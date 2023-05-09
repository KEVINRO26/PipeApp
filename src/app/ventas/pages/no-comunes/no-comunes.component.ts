import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Kevin';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona(){
    this.nombre = 'Melissa';
    this.genero = 'femenino'

  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro','Pamela','Danil','Kevin','Andres'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente(){
 this.clientes.pop(); //elimina al ultimo de la lista

  }

  //KeyValue Pipe
  persona = {
    nombre: 'Eduardo',
    edad: 23,
    direccion: 'Guayas, Guayaquil'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    },
    
  ]

  //Async Pipe

  miObservable= interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa'); 
    }, 3500  );

  });
}
