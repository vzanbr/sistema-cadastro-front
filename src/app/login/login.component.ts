import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  cadastrando: boolean;
  msgSucesso: string;
  errors: String[];

  constructor(
    private router : Router,
    private authService: AuthService
  ) {}

    onSubmit() {
      this.router.navigate(['/home'])
   }

   preparaCadastrar(event) {
    event.preventDefault();
    this.cadastrando = true;
   }   
   
   cancelaCadastro() {
    this.cadastrando = false;
   }

cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe( response => {
          this.msgSucesso = "Cadastro realizado com sucesso! Efetue o login."
        }, errorResponse => {
          this.msgSucesso = null;
          this.errors = errorResponse.error.errors;
        })
   }
}
