import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/shared/service/marca.service';

@Component({
  selector: 'app-cadastrar-marca',
  templateUrl: './cadastrar-marca.component.html',
  styleUrls: ['./cadastrar-marca.component.css']
})
export class CadastrarMarcaComponent implements OnInit {

  marca = [];

  ngOnInit() {
    this.consultar();

  }

  constructor(private marcaService: MarcaService) { }

  adicionar(nome: string) {
    this.marcaService.adicionar({ nome });
    this.consultar();

  }
  
  public verifyName(nome: string) {
    return nome ? true : false;
  }

  consultar() {
    this.marcaService.consultar().subscribe(resultado => this.marca = resultado);
  }

  excluir(id: number) {
    this.marcaService.excluir(id).subscribe(res => {
      console.log('Produto excluído com sucesso.');
      this.consultar();
    },
      erro => {
        if (erro.status === 404) {
          console.log('Produto não localizado.');
        }
      }
    );
  }
}
