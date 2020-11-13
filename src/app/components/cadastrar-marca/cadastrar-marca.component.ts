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

  constructor(private marcaService: MarcaService) {}

  adicionar(nome: string){
    this.marcaService.adicionar({nome});
    this.consultar();

  } 

  consultar(){
    this.marcaService.consultar().subscribe(resultado => {this.marca = resultado})}

  excluir(id: number){
    this.marcaService.excluir(id);
    this.consultar();
  }

}
