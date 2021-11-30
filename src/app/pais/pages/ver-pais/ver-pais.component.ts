import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators'
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // El signo ! es para que me acepte null
  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService ) { }

  ngOnInit(): void {
    // Para suscribirnos a cualquier cambio de la url
    // this.activatedRoute.params
    // .subscribe( ({ id }) => {  // Se ocupa desestructuracion
    //   this.paisService.BuscarCodigoPais(id)
    //   .subscribe( pais => {
    //     console.log(pais);
    //   })
    // });

    // El operador switch map recibe el valor de un siscribe y retorna un suscribe
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.BuscarCodigoPais(id))
    )
    .subscribe(pais => {
      this.pais = pais;
      console.log(this.pais);
    });
  }

}
