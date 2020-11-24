import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';

import { ProdutoService } from 'src/app/shared/service/produto.service';

@Component({
  selector: 'app-components-produto-persist-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewProdutoComponent implements OnInit {

  public category = [];
  produto = [];

  ngOnInit() {
    this.consultar();
    this.getCategory();
  }

  constructor(
    protected produtoService: ProdutoService,
    private categoryService: CategoryService
  ) {}

  getCategory() {
    this.categoryService.get().subscribe(res => {
     this.category = res;
    });
  }

  adicionar(codigo: Number, codBarra: Number, nome: string, valor: Number, quantidade: String, medida: String, peso: String, descricao: String ) {
    this.produtoService.adicionar({codigo, codBarra, nome, valor, quantidade, medida, peso, descricao});
    this.consultar();
  }

  consultar() {
    this.produtoService.consultar().subscribe(resultado => {this.produto = resultado})}

  excluir(id: number) {
    this.produtoService.excluir(id);
    this.consultar();
  }

}
