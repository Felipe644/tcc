import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        routerLink: '/'
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
            icon: 'pi pi-minus'
          },
          {
            label: 'Novo produto',
            icon: 'pi pi-minus'
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
      }
    ];
  }

}
