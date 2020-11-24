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

  adicionar(nome: string){
    this.especieService.adicionar({nome});
    this.consultar();

  } 

  consultar(){
    this.especieService.consultar().subscribe(resultado => {this.especie = resultado});
  }

  excluir(id: number){
    this.especieService.excluir(id);
    this.consultar();
  }
}
