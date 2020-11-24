import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MarcaService } from '../shared/service/marca.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
    constructor(private router: Router, 
                //private herokuService:HerokuService,
                private loginService: MarcaService)
    { 

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree 
    {
        let usuario:any = JSON.parse(window.localStorage.getItem("usuarioLogado"));

        // integração com serviço externo

        // let retorno:Subject<boolean> = new Subject<boolean>();

        // this.loginService.consultar().subscribe(e =>{

        //     if(e)
        //     {
        //         retorno.next(true);
        //         retorno.complete();
        //     }
        //     else
        //     {
        //         retorno.complete();
        //         return this.router.navigate(["/login"]);
        //     }
        // }, err =>{
        //     retorno.complete();
        //     return this.router.navigate(["/login"]);
        // });
        // return(retorno);

        // sem integração com serviço externo
        
        if(usuario && usuario["nome"])
        {
            return true;
        }
        else
        {
            return this.router.navigate(["/login"]);
        }

    }
}