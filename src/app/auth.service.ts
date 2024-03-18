import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrlCriar: string = environment.loginUrlCriar

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario : Usuario) : Observable<any> {
    return this.http.post(this.loginUrlCriar, usuario);
  }
}