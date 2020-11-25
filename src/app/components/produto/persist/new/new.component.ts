import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { EspecieService } from 'src/app/shared/service/especie.service';
import { MarcaService } from 'src/app/shared/service/marca.service';

import { ProdutoService } from 'src/app/shared/service/produto.service';

@Component({
  selector: 'app-components-produto-persist-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewProdutoComponent implements OnInit {

  public category = [];
  public marca = [];
  public especie = [];
  public status = [
    {id: 1, name:'Disponível'},
    {id: 2, name:'Indisponível'}
  ];
  produto = [];

  ngOnInit() {
    this.consultar();
    this.getCategory();
    this.getMarca();
  }

  constructor(
    protected produtoService: ProdutoService,
    private categoryService: CategoryService,
    private marcaService: MarcaService,
    private especieService: EspecieService
  ) {}

  getCategory() {
    this.categoryService.get().subscribe(res => {
     this.category = res;
    });
  }
  getMarca() {
    this.marcaService.consultar().subscribe(resultado => {
      this.marca = resultado;
    });
  }
  
  getEspecie() {
    this.especieService.consultar().subscribe(resultado => {
      this.especie = resultado;
    });
  }


  adicionar(codigo: Number, nome: string, valor: Number, quantidade: String, medida: String, peso: String, descricao: String ) {
    this.produtoService.adicionar({codigo, nome, valor, quantidade, medida, peso, descricao});
    this.consultar();
  }
  // adicionar(idProduto: Number, nome: string, valor: Number, idCategoria:Number, quantidade: Number, idMarca: Number,
  //   unidadeMedida: string, peso: Number, idEspecie: Number,status: string, descricaoProduto: string) {
  //   this.produtoService.adicionar({idProduto, nome, valor, idCategoria, quantidade, idMarca,
  //     unidadeMedida, peso, idEspecie,status, descricaoProduto});
  //   this.consultar();
  // }

  consultar() {
    this.produtoService.consultar().subscribe(resultado => {this.produto = resultado})}

  excluir(id: number) {
    this.produtoService.excluir(id);
    this.consultar();
  }

}
