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

  adicionar(descricaoMarca: string) {
    
    this.marcaService.adicionar({ descricaoMarca }).subscribe(
      resultado => {
        console.log(resultado);
        this.consultar();
      },
      erro => {
        if (erro.status === 400) {
          console.log(erro);
        }
      }
    );;

  }
  
  
  public verifyName(descricaoMarca: string) {
    return descricaoMarca ? true : false;
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
