import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestadoListaBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiServURL: string = environment.apiSlURL;

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  salvar(servicoPresta : ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(`${this.apiURL}/servicos/salvar`, servicoPresta);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoListaBusca[]>{
    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ?  mes.toString() : '');

    const url = this.apiServURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}
