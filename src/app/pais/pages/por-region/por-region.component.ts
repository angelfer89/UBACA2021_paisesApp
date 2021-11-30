import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ "button { margin-right: 5px}"
  ]
})
export class PorRegionComponent {

  regiones : string[] =  ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';

  termino :  string = '';
  hayError:  boolean = false;
  paises:    Country[] = [];
  hayPaises: boolean = false;

  constructor(private paisService: PaisService) { }

  ActivarRegion ( region: string){

    if(region === this.regionActiva) return;
    this.regionActiva = region;  
    this.paisService.BuscarPorRegion(region)
    .subscribe(paises =>{ 
      this.paises = paises;
      this.hayPaises = true;
    });
  }

  ObtenerCSS(region: string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outlinr-primary'
  }

}