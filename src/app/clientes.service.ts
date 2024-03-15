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
   
   atualizar (cliente: Cliente) : Observable<any> {
      return this.http.put<Cliente>(`http://localhost:1000/atualizar/${cliente.id}`, cliente);
   }

   getClientes() : Observable<Cliente[]> {
      return this.http.get<Cliente[]>('http://localhost:1000/clientes');
   }

   getClienteById(id: number) : Observable<Cliente> {
      return this.http.get<any>(`http://localhost:1000/cliente/${id}`);
   }   
   
   deletarCliente(cliente: Cliente) : Observable<any> {
      return this.http.delete<any>(`http://localhost:1000/deletar/${cliente.id}`);
   }
}