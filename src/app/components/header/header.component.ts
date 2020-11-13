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
// <!--    <li class="navbar-menuitem"><a href="#">Início</a></li>-->
// <!--    <li class="navbar-menuitem"><a href="#">Minha Loja</a></li>-->
// <!--    <li class="navbar-menuitem"><a href="#">Produtos</a></li>-->
// <!--    <li class="navbar-menuitem"><a href="#">Marcas</a></li>-->
// <!--    <li class="navbar-menuitem"><a routerLink="/especies">Espécies</a></li>-->
// <!--    <li class="navbar-menuitem"><a href="#">Relatórios</a></li>-->
// <!--    <li class="navbar-menuitem"><a href="#">Configurações</a></li>-->
// <!--    <li class="navbar-menuitem"><a href="#">Logout</a></li>-->

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-pw pi-file',
        routerLink: '/'
      },
      {
        label: 'Minha Loja',
        icon: 'pi pi-pw pi-file'
      },
      {
        label: 'Produtos',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'Listar produtos',
            icon: 'pi pi-pw pi-file'
          },
          {
            label: 'Novo produto',
            icon: 'pi pi-pw pi-file'
          }
        ]
      },
      {
        label: 'Marcas',
        icon: 'pi pi-pw pi-file'
      },
      {
        label: 'Espécies',
        icon: 'pi pi-pw pi-file',
        routerLink: '/especies'
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-pw pi-file'
      },
      {
        label: 'Configurações',
        icon: 'pi pi-pw pi-file'
      },
      {
        label: 'Logout',
        icon: 'pi pi-pw pi-file',
      }
    ];
  }

}
