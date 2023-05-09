import { Pipe, PipeTransform } from "@angular/core";

//decorador
@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {

    transform( valor: boolean ): string {
        //return valor.toUpperCase();
        return( valor )? ' si': 'no';

        //si valor es true va a decir que vuela
        //si es falso va a decir que no vuela
    }

}