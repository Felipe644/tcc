import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  consultar(): Observable<any>{
    return this.http.get(`${this.apiURL}/produto`);
  }

  // public uploadImage(arquivo: File): Observable<Object> {
  //   const formData = new FormData();

  //   formData.append('arquivo', arquivo);

  //   return this.http.post('/api/v1/image-upload', formData);
  // }

  adicionar(produto: any) {

    // const formData = new FormData();
    // formData.append('arquivo', arquivo);
    // formData.append('produto', produto);


    this.http.post(`${this.apiURL}/produto`, produto)
      .subscribe(
        resultado => {
          console.log(resultado);
        },
        erro => {
          if (erro.status === 400) {
            console.log(erro);
          }
        }
      );
  }

  excluir(id: number) {
    this.http.delete(`${this.apiURL}/produto/${id}`)
      .subscribe(
        resultado => {
          console.log('Produto excluído com sucesso.');
        },
        erro => {
          if (erro.status === 404) {
            console.log('Produto não localizado.');
          }
        }
      );
  }

}
