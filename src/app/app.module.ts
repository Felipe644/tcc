import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from './app-routing.module';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ListProdutoComponent } from './components/produto/list/list.component';
import { DemandListComponent } from './pages/demand-list/demand-list.component';
import { NewProdutoComponent } from './components/produto/persist/new/new.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { CadastrarMarcaComponent } from './components/cadastrar-marca/cadastrar-marca.component';
import { CadastrarEspecieComponent } from './components/cadastrar-especie/cadastrar-especie.component';
import { LoginComponent } from './components/login/login.component';
import { DataShareService } from './components/data-share.service';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    TooltipModule,
    BrowserModule,
    DropdownModule,
    InputTextModule,
    PanelMenuModule,
    HttpClientModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    InputTextareaModule
  ],
  declarations: [
    AppComponent,
    MessageComponent,
    DemandListComponent,
    CardComponent,
    HeaderComponent,
    NewProdutoComponent,
    ListProdutoComponent,
    TitleHeaderComponent,
    CadastrarMarcaComponent,
    CadastrarEspecieComponent,
    LoginComponent
  ],
  providers: [
    DataShareService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
