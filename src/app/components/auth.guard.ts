import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarcaService } from '../shared/service/marca.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    apiURL = environment.apiURL;

    constructor(private router: Router,
        private http: HttpClient) {

    }

    consultar(email: string, senha: string): Observable<any> {



        return this.http.post(`${this.apiURL}/usuariosLogin`, { email, senha });
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
        let usuario: any = JSON.parse(window.localStorage.getItem("usuarioLogado"));

        /*
            integração com serviço externo
         **/

        let retorno: Subject<boolean> = new Subject<boolean>();

        if (usuario) {
            this.consultar(usuario["email"], usuario["senha"]).subscribe(e => {
                if (e) {
                    retorno.next(true);
                    retorno.complete();
                }
                else {
                    retorno.complete();
                    return this.router.navigate(["/login"]);
                }
            }, err => {

                retorno.next(true);
                retorno.complete();

                return this.router.navigate(["/login"]);
            });
        }

        return (retorno);
    }
}