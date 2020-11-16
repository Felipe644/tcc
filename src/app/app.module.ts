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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { DemandListComponent } from './pages/demand-list/demand-list.component';
import { CardModule } from 'primeng/card';
import { CardComponent } from './components/card/card.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastrarEspecieComponent } from './components/cadastrar-especie/cadastrar-especie.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { CadastrarMarcaComponent } from './components/cadastrar-marca/cadastrar-marca.component';
import { LoginComponent } from './components/login/login.component';
// import { HeaderComponent } from './components/template/header/header.component';
// import { MeusPedidosComponent } from './components/template/meus-pedidos/meus-pedidos.component';
// import { NovoProdutoComponent } from './components/template/novo-produto/novo-produto.component';
// import { MeusProdutosComponent } from './components/template/meus-produtos/meus-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    DemandListComponent,
    CardComponent,
    TitleHeaderComponent,
    HeaderComponent,
    CadastrarEspecieComponent,
    CadastrarMarcaComponent,
    LoginComponent,
    
    // MeusPedidosComponent,
    // NovoProdutoComponent,
    // MeusProdutosComponent,

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
    CardModule,
    InputTextareaModule,
    DropdownModule,
    HttpClientModule,
    PanelMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
