import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        routerLink: '/pedidos'
      },
      {
        label: 'Minha Loja',
        icon: 'pi pi-shopping-cart'
      },
      {
        label: 'Produtos',
        icon: 'pi pi-inbox',
        items: [
          {
            label: 'Listar produtos',
            icon: 'pi pi-minus',
            routerLink: '/produtos'
          },
          {
            label: 'Novo produto',
            icon: 'pi pi-minus',
            routerLink: '/produto/cadastrar'
          }
        ]
      },
      {
        label: 'Marcas',
        icon: 'pi pi-minus',
        routerLink: '/marcas'
      },
      {
        label: 'Espécies',
        icon: 'pi pi-minus',
        routerLink: '/especies'
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-chart-bar'
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        routerLink: this.logout
      }
    ];
  }

  logout()
  {
    window.localStorage.removeItem("usuarioLogado");
    this.router.navigate(["/login"]);
  }
}
