import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ "li { cursor: pointer }" ]
})
export class PorPaisComponent{

  termino :  string = '';
  hayError:  boolean = false;
  paises:    Country[] = [];
  paisesSugeridos:    Country[] = [];
  hayPaises: boolean = false;
  mostrarSugerencias: boolean = false;

  constructor(private paisService : PaisService) { }

  Buscar( termino: string){
    this.termino = termino;
    this.hayError = false;
    this.hayPaises = false;
    this.mostrarSugerencias = false;
    this.paisService.BuscarPais(this.termino)
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.paisesSugeridos = [];
    this.paisService.BuscarPais(termino)
                    .subscribe( 
                      (paises) => {
                          this.paisesSugeridos = paises.slice(0,5);
                      },
                      (err) => {
                        this.paisesSugeridos = [];
                      }
                    );
  }

  BuscarSugerido(termino : string){
    this.Buscar(termino);
  }

}
