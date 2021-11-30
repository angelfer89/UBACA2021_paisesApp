import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

get httpParams(){
  return new HttpParams()
          .set('fields','name,capital,alpha2Code,flag,population');
}


  constructor(private httpclient: HttpClient) { }

  BuscarPais(termino : string): Observable<Country[]> {
    const url = this.apiUrl + '/name/' + termino;
    return this.httpclient.get<Country[]>(url, { params: this.httpParams });
  }

  BuscarCapital(termino : string): Observable<Country[]> {
    const url = this.apiUrl + '/capital/' + termino;
    return this.httpclient.get<Country[]>(url, { params: this.httpParams  });
  }

  BuscarCodigoPais(id : string): Observable<Country> {
    const url = this.apiUrl + '/alpha/' + id;
    return this.httpclient.get<Country>(url);
  }

  BuscarPorRegion(region : string): Observable<Country[]> {
    const url = this.apiUrl + '/regionalbloc/' + region;
    return this.httpclient.get<Country[]>(url, { params: this.httpParams  });
  }

}
