import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { HeaderComponent } from './components/template/header/header.component';

import { MeusPedidosComponent } from './components/template/meus-pedidos/meus-pedidos.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { NovoProdutoComponent } from './components/template/novo-produto/novo-produto.component';
import { CadastrarEspecieComponent } from './components/template/cadastrar-especie/cadastrar-especie.component';
import { CadastrarMarcaComponent } from './components/template/cadastrar-marca/cadastrar-marca.component';
import { MarcaService } from './marca.service';
import { HttpClientModule } from '@angular/common/http';
import { EspecieService } from './especie.service';
import { ProdutoService } from './produto.service';
import { MeusProdutosComponent } from './components/template/meus-produtos/meus-produtos.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'produtos', component: MeusProdutosComponent},
  { path: 'produtos/novo', component: NovoProdutoComponent},
  { path: 'pedidos', component: MeusPedidosComponent},
  { path: 'marcas', component: CadastrarMarcaComponent},
  { path: 'especies', component: CadastrarEspecieComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeusPedidosComponent,
    NovoProdutoComponent,
    MeusProdutosComponent,
    MessageComponent,
    CadastrarEspecieComponent,
    CadastrarMarcaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    TooltipModule,
    InputTextareaModule,
    DropdownModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MarcaService,
              EspecieService,
              ProdutoService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
