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
   apiClURL: string = environment.apiClURL;
   apiClientURL: string = environment.apiClienteURL;

  constructor( private http: HttpClient ) {}

   salvar (cliente: Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>(`${this.apiClientURL}`, cliente);
   }   
   
   atualizar (cliente: Cliente) : Observable<any> {
      return this.http.put<Cliente>(`${this.apiURL}/cliente/atualizar/${cliente.id}`, cliente);
   }

   getClientes() : Observable<Cliente[]> {
      return this.http.get<Cliente[]>(`${this.apiClURL}`);
   }

   getClienteById(id: number) : Observable<Cliente> {
      return this.http.get<any>(`${this.apiURL}/cliente/${id}`);
   }   
   
   deletarCliente(cliente: Cliente) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/cliente/deletar/${cliente.id}`);
   }
}