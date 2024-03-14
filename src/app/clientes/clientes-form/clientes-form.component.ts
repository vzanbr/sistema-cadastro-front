import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  nome: string = 'Digite seu nome';

  constructor() { 
    this.cliente = new Cliente();
    this.cliente.nome = 'gabriel';
  }

  ngOnInit(): void {
  }

  clicar() {
    console.log('Cliquei!');
  }
    

}
