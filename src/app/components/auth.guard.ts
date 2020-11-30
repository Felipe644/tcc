import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarcaService } from '../shared/service/marca.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{

    apiURL = environment.apiURL;

    // constructor(private http: HttpClient) {}

    constructor(private router: Router,
                private http: HttpClient)
    { 

    }

    consultar(email:string, senha:string): Observable<any>
    {
        // get
        // let params = new HttpParams();

        // params = params.append('email', email);
        // params = params.append('senha', senha);
        // return this.http.get(`${this.apiURL}/usuariosLogin`,  { params: params });

        //post
        const formData = new FormData();
        formData.append('email', email);
        formData.append('senha', senha);
        return this.http.post(`${this.apiURL}/usuariosLogin`,  formData);
      }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree 
    {
        let usuario:any = JSON.parse(window.localStorage.getItem("usuarioLogado"));
        
        // integração com serviço externo

        let retorno:Subject<boolean> = new Subject<boolean>();

        if(usuario){

            this.consultar(usuario["email"], usuario["senha"]).subscribe(e =>{
                if(e)
                {
                    retorno.next(true);
                    retorno.complete();
                }
                else
                {
                    retorno.complete();
                    return this.router.navigate(["/login"]);
                }
            }, err =>{
                
                retorno.next(true);
                retorno.complete();

                return this.router.navigate(["/login"]);
            });
        }

        return(retorno);

        // sem integração com serviço externo
        
        // if(usuario && usuario["nome"])
        // {
        //     return true;
        // }
        // else
        // {
        //     return this.router.navigate(["/login"]);
        // }

    }
}