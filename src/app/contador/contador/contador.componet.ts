import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `

        <h1>{{titulo}}</h1> 
        <h3>Labase es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(+base)"> + {{base}}</button>

        <span> {{numero}}</span>

        <button (click)="acumular(-base)"> - {{base}}</button> 

    `
})
export class ContadorComponent {
    
    titulo: string = 'Bases de Angular';
    numero: number = 10;
    base  : number = 5;
  
    /* sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    } */
  
    acumular(valor:number):void{
      this.numero += valor;
    }
}