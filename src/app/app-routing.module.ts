import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProdutoComponent } from './components/produto/list/list.component';
import { DemandListComponent } from './pages/demand-list/demand-list.component';
import { NewProdutoComponent } from './components/produto/persist/new/new.component';
import { CadastrarMarcaComponent } from './components/cadastrar-marca/cadastrar-marca.component';
import { CadastrarEspecieComponent } from './components/cadastrar-especie/cadastrar-especie.component';
import { AuthGuard } from './components/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pedidos',
    component: DemandListComponent
  },
  {
    path: 'produtos',
    component: ListProdutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'produto/cadastrar',
    component: NewProdutoComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'marcas',
    component: CadastrarMarcaComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'especies',
    component: CadastrarEspecieComponent,
    canActivate: [AuthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
