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
  

  enviarArquivo() {
    // this.produtoService.uploadImage(this.uploadedFiles[0]).subscribe(e =>{
    //   this.produto.urlImage = e;
    //   this.produtoService.adicionar(produto).subscribe()......
    // });
  }

  adicionar(descricaoProduto: string, valor: Number, qtdEstoque: Number, medida: string, peso: string,
    status: string, nome: string, ) {
    this.produtoService.adicionar({descricaoProduto, valor, qtdEstoque, medida, peso,
      status, nome, idMarca: "26", idEspecie: "1", idCategoria: "1", idParceiro: "1", imagem: "data:image/jpeg;base64,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"});
    this.consultar();
  }

  consultar() {
    this.produtoService.consultar().subscribe(resultado => {this.produto = resultado})}

  excluir(id: number) {
    this.produtoService.excluir(id);
    this.consultar();
  }

}
