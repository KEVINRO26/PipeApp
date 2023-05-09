import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {

  nombreLower: string = 'Kevin';
  nombreUpper: string = 'KEVIN';
  nombreCompleto: string = 'KevIn rOmeRo';


  fecha: Date = new Date(); //dia de hoy, se utiliza para trabajos sencillos


}
