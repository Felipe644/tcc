import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecieService{

  apiURL = 'http://localhost:3000';

    constructor(private http : HttpClient) {
      
    }


    consultar():Observable<any> {
      return this.http.get(`${ this.apiURL }/especies`)


    } 

    adicionar(especie: any){
      this.http.post(`${ this.apiURL }/especies`, especie)
      .subscribe(
        resultado => {
          console.log(resultado)
        },
        erro => {
          if(erro.status == 400) {
            console.log(erro);
          }
        }
      );

      }

      excluir(id: number) {
        this.http.delete(`${ this.apiURL }/especies/${id}`)
                  .subscribe(
                    resultado => {
                      console.log('Produto excluído com sucesso.');
                    },
                    erro => {
                      if(erro.status == 404) {
                        console.log('Produto não localizado.');
                      }
                    }
                  );
      }
     

}