import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/shared/service/produto.service';

@Component({
  selector: 'app-components-produto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListProdutoComponent implements OnInit {

  produto = [];

  ngOnInit() {
    this.consultar();
  }

  constructor(
    protected produtoService: ProdutoService
  ) {}


  consultar() {
    this.produtoService.consultar().subscribe(resultado => {this.produto = resultado})}

    excluir(id: number){
      this.produtoService.excluir(id);
      this.consultar();
    }



}
