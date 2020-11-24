import { Component, OnInit } from '@angular/core';

import { ProdutoService } from 'src/app/shared/service/produto.service';

@Component({
  selector: 'app-components-produto-persist-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewProdutoComponent implements OnInit {

  produto = [];

  ngOnInit() {
    this.consultar();
  }

  constructor(
    protected produtoService: ProdutoService
  ) {}

  adicionar(nome: string) {
    this.produtoService.adicionar({nome});
    this.consultar();
  }

  consultar() {
    this.produtoService.consultar().subscribe(resultado => {this.produto = resultado})}

  excluir(id: number) {
    this.produtoService.excluir(id);
    this.consultar();
  }

}
