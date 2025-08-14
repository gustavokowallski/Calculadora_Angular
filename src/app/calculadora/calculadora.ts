import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {
    numero1: number =0;
    numero2: number =0;
    resultado: number = 0;
    

    calcularResultado(){
      console.log("Chamando método para calcular o resultado");
      console.log("Numero 1" + this.numero1)
      console.log("Numero 2" + this.numero2)
      this.resultado = this.numero1+ this.numero2;
    }
}
