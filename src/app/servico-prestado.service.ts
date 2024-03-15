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

  apiURL: string = environment.apiServPresURL;

  constructor(private http: HttpClient) { }

  salvar(servicoPresta : ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(`${this.apiURL}/salvar/servico`, servicoPresta);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoListaBusca[]>{
    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes.toString()) ;

    const url = this.apiURL + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
}
