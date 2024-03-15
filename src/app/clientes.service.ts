import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

   apiURL: string = environment.apiURL;

  constructor( private http: HttpClient ) {}

   salvar (cliente: Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>(`${this.apiURL}/salvar/cliente`, cliente);
   }   
   
   atualizar (cliente: Cliente) : Observable<any> {
      return this.http.put<Cliente>(`${this.apiURL}/atualizar/${cliente.id}`, cliente);
   }

   getClientes() : Observable<Cliente[]> {
      return this.http.get<Cliente[]>(`${this.apiURL}/clientes`);
   }

   getClienteById(id: number) : Observable<Cliente> {
      return this.http.get<any>(`${this.apiURL}/cliente/${id}`);
   }   
   
   deletarCliente(cliente: Cliente) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/deletar/${cliente.id}`);
   }
}