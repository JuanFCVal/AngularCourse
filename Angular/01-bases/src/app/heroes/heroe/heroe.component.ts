import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {
  nombre: string = "Ironman";
  edad: number = 23



  obtenerEdad(): string{
    return this.nombre+" " +this.edad;
  }

  cambiarNombre(): void{
    this.nombre = "Spiderman";
  }
  cambiarEdad(): void{
    this.edad = Math.floor(Math.random() * (90 - 19 + 1)) + 19;;
  }

}
