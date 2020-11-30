import { Component, OnInit } from '@angular/core';
import { EspecieService } from 'src/app/shared/service/especie.service';

@Component({
  selector: 'app-cadastrar-especie',
  templateUrl: './cadastrar-especie.component.html',
  styleUrls: ['./cadastrar-especie.component.css']
})
export class CadastrarEspecieComponent implements OnInit {

  especie = [];

  ngOnInit() {
    this.consultar();

  }

  constructor(private especieService: EspecieService) {}

  adicionar(descricao: string){
    this.especieService.adicionar({descricao}).subscribe(
      resultado => {
        console.log(resultado);
        this.consultar();
      },
      erro => {
        if (erro.status === 400) {
          console.log(erro);
        }
      }
    );
    

  } 

  consultar(){
    this.especieService.consultar().subscribe(resultado => {this.especie = resultado});
  }

  excluir(id: number){
    this.especieService.excluir(id);
    this.consultar();
  }
}
