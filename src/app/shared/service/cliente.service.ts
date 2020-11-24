import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL = environment.apiURL + '/clientes';

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

}
