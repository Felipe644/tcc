import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  apiURL = environment.apiURL + '/pedido';

  constructor(private http: HttpClient) { }

  public getByParceiroId(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
