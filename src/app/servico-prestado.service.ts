import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  salvar(servicoPresta : ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(`${this.apiURL}/salvar/servico`, servicoPresta);
  }
}
