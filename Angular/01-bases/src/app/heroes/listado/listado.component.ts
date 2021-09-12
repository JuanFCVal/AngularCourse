import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  heroes: string[] = ["Spiderman","Hulk","Thor","Pepe"]
  heroeBorrado: string = "";
  borrar(): void{
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
