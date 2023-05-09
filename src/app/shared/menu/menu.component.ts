import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit{
  items: MenuItem[] = [];


  ngOnInit(): void {
    this.items = [      
     {
      label: 'Pipes de angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Texto y Fechas',
          icon: 'pi pi-aling-left',
          routerLink: '/'
        },
        {
          label: 'Números',
          icon: 'pi pi-aling-dollar',
          routerLink: 'numeros'
        },
        {
          label: 'No comunes',
          icon: 'pi pi-aling-globe',
          routerLink: 'no-comunes'
        }]
     },
     {
      label: 'Pipe personalizados',
      icon: 'pi pi-cog',
      routerLink: 'ordenar'
     }
    ];
  }
 


}
