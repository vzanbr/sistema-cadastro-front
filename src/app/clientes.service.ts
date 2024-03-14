import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {}

   salvar (cliente: Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>('http://localhost:1000/salvar/cliente', cliente);
   }

   getClientes() : Observable<Cliente[]> {
      return this.http.get<Cliente[]>('http://localhost:1000/clientes');
   }
}
