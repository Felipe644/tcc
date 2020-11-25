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
    return this.http.post(`${this.apiURL}/marca`, marca)
    
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/marca/${id}`);
  }

}
