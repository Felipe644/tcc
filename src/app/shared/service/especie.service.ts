import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  consultar(): Observable<any> {
    return this.http.get(`${this.apiURL}/especie`);
    
  }



  adicionar(especie: any) {
    return this.http.post(`${this.apiURL}/especie`, especie)
     
  }

  excluir(id: number) {
    this.http.delete(`${this.apiURL}/especie/${id}`)
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
