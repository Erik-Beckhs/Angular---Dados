import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  izquierda:string = '../assets/img/dice3.png';
  derecha:string = '../assets/img/dice4.png';

  num1:number;
  num2:number;

  activo:boolean=true;

  ganaste:boolean=false;

  constructor(){

  }

  tirarDados = ()=>{
    this.ganaste = false;

    this.num1 = Math.round(Math.random()*5)+1;
    this.num2 = Math.round(Math.random()*5)+1;

    // console.log(this.num1);
    // console.log(this.num2);

    this.izquierda = `../assets/img/dice${this.num1}.png`;
    this.derecha = `../assets/img/dice${this.num2}.png`;

    if(this.izquierda == this.derecha){
      this.ganaste = true;
      this.activo = false;
    }
  }
  
}
