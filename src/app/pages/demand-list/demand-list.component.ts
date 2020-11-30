import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { DemandService } from 'src/app/shared/service/demand.service';
import { EspecieService } from 'src/app/shared/service/especie.service';

@Component({
  selector: 'app-demand-list',
  templateUrl: './demand-list.component.html',
  styleUrls: ['./demand-list.component.css']
})
export class DemandListComponent implements OnInit {

  
  public demands = [];
  public clientes = [];
  public listDemands = [];

  constructor(
    private demandService: DemandService,
    private clienteService: ClienteService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAll();

  }

  public send(): void {
    this.messageService.add({severity:'success', summary:'', detail:'ENVIADO COM SUCESSO'});
  }

  public getAll(): void {
    this.demandService.getByParceiroId(1).subscribe(res => {
      res.forEach(r => {
        this.getClientByClientId(r);
      });
    });
  }

  public getClientByClientId(parceiro: any): void {
    let i = 0;
    this.clienteService.getById(parceiro.idCliente).subscribe(cliente => {
      this.demands.push({ idPedidos: parceiro.idPedidos, nomeCliente: cliente[i].nome, status: parceiro.status, valorPedido: parceiro.valorPedido });
      i++;
    });
  }

}
