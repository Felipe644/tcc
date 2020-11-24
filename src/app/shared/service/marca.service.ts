import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  consultar(): Observable<any> {
    return this.http.get(`${this.apiURL}/marca`);
  }

  adicionar(marca: any) {
    this.http.post(`${this.apiURL}/marca`, marca)
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

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/marca/${id}`);
  }

}
