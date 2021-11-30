import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino :  string = '';
  hayError:  boolean = false;
  paises:    Country[] = [];
  hayPaises: boolean = false;

  constructor(private paisService : PaisService) { }

  Buscar( termino: string){
    this.termino = termino;
    this.hayError = false;
    this.hayPaises = false;
    this.paisService.BuscarCapital(this.termino)
    .subscribe( (paises) => {
      this.paises = paises;
      if(this.paises.length === undefined){
        this.hayError = true;
        return;
      }
      this.hayPaises = true;
    });
  }

  Sugerencias(termino: string){
    this.hayError = false;
  }

}
