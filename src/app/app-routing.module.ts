import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandListComponent } from './pages/demand-list/demand-list.component';
import {HeaderComponent} from "./components/header/header.component";

const routes: Routes = [

  // {
  //   path: '',
  //   component: HeaderComponent
  // },
  { 
    path: '', 
    component: DemandListComponent 
  },

  // {
  //   path: 'produtos',
  //   component: MeusProdutosComponent
  // },
  // {
  //   path: 'produtos/novo',
  //   component: NovoProdutoComponent
  // },
  // {
  //   path: 'pedidos',
  //   component: MeusPedidosComponent
  // },
  // {
  //   path: 'marcas',
  //   component: CadastrarMarcaComponent
  // },
  // {
  //   path: 'especies',
  //   component: CadastrarEspecieComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
