import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Thork', 'Spiderman', 'Superman', 'Batman'];
  heroeBorrado: string= '';

  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || '';
    return this.heroeBorrado;
  
  }

}
