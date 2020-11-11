import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './components/header/header.component';
// import { HeaderComponent } from './components/template/header/header.component';
// import { MeusPedidosComponent } from './components/template/meus-pedidos/meus-pedidos.component';
// import { NovoProdutoComponent } from './components/template/novo-produto/novo-produto.component';
// import { MeusProdutosComponent } from './components/template/meus-produtos/meus-produtos.component';
// import { CadastrarMarcaComponent } from './components/template/cadastrar-marca/cadastrar-marca.component';
// import { CadastrarEspecieComponent } from './components/template/cadastrar-especie/cadastrar-especie.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    HeaderComponent,
    // MeusPedidosComponent,
    // NovoProdutoComponent,
    // MeusProdutosComponent,
    // CadastrarEspecieComponent,
    // CadastrarMarcaComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
