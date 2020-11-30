import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
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

  uploadedFiles: any[] = [];

  public category = [];
  public marca = [];
  public especie = [];
  public statuss = [
    {id: 1, name:'Disponível'},
    {id: 2, name:'Indisponível'}
  ];
  produto = [];
  base64Img:string = "";


  ngOnInit() {
    this.consultar();
    this.getCategory();
    this.getMarca();
    this.getEspecie();
  }

  constructor(
    protected produtoService: ProdutoService,
    private categoryService: CategoryService,
    private marcaService: MarcaService,
    private especieService: EspecieService,
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

  onUpload(event) {
    const file = this.uploadedFiles = [];
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        this.convertToBase64(file);
    }
   
  }
  
  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      console.log(d);
      this.base64Img = d;
    });
  }

  readFile(file: File, subscribe: Subscriber<any>)  {
    const filereader=new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscribe.next(filereader.result);
      subscribe.complete();
    };

    filereader.onerror = (error) => {
      subscribe.error(error);
      subscribe.complete();
    };

  }
  

  adicionar(descricaoProduto: string, valor: Number, qtdEstoque: Number, medida: string, peso: string, nome: string) {
    //console.log('teste' + idEspecie)
    this.produtoService.adicionar({descricaoProduto, valor, qtdEstoque, medida, peso,
      status: "Ativo", nome, idMarca: "26", idEspecie: "1", idCategoria: "1", idParceiro: "1",  imagem: this.base64Img});
    this.consultar();
  }

  consultar() {
    this.produtoService.consultar().subscribe(resultado => {this.produto = resultado})}

  excluir(id: number) {
    this.produtoService.excluir(id);
    this.consultar();
  }

}
