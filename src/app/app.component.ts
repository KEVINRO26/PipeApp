import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //Para utilizar el diseño que esta en la pagina 
  //https://www.primefaces.org/primeng-v13-lts/#/fieldset
  
  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit() {
    this.primengConfig.ripple = true; 
  }

}
