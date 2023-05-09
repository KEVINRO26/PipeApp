import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], orderPor: string = 'sin valor' ): Heroe[] {

    switch( orderPor ){
      case 'nombre':
        return heroes.sort(  (a,b)  => (a.nombre > b.nombre)?1:-1 );

        case 'vuela': 
          return heroes.sort(  (a,b)  => (a.vuela > b.vuela)?-1:1 );
          //-1:1 primero inicia con los true y luego con los false
          //1:-1 primero inicia con los false y luego con los true
        case 'color':
          return heroes.sort(  (a,b)  => (a.color > b.color)?1:-1 );

      default:
        return heroes; //si no ingresa lo espera va a retonar la lista hereo inicial
    }

    // if( orderPor === 'sin valor') {
    // } else {
    //   heroes = heroes.sort(  (a,b)  => (a.nombre > b.nombre)?1:-1 );
    // }

   
    // //si a es mayor a b 
    // //sirve para ordenar alfabeticamente xd
    // return heroes;
  }

}
