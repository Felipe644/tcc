import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProdutoComponent } from './components/produto/list/list.component';
import { DemandListComponent } from './pages/demand-list/demand-list.component';
import { NewProdutoComponent } from './components/produto/persist/new/new.component';
import { CadastrarMarcaComponent } from './components/cadastrar-marca/cadastrar-marca.component';
import { CadastrarEspecieComponent } from './components/cadastrar-especie/cadastrar-especie.component';

const routes: Routes = [

  {
    path: '',
    component: DemandListComponent
  },
  {
    path: 'produto',
    component: ListProdutoComponent
  },
  {
    path: 'produto/cadastrar',
    component: NewProdutoComponent
  },
  // {
  //   path: 'pedidos',
  //   component: MeusPedidosComponent
  // },
  {
    path: 'marcas',
    component: CadastrarMarcaComponent
  },
  {
    path: 'especies',
    component: CadastrarEspecieComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
