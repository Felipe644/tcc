import { Component, OnInit } from '@angular/core';
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
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getAll();

  }

  public getAll(): void {
    this.demandService.getByParceiroId(1).subscribe(res => {
      res.forEach(r => {
        // this.demands.push({ idPedidos: r.idPedidos, nameCliente: r.idCliente, status: r.status, valorPedido: r.valorPedido });
        this.getClientByClientId(r.idCliente);
        this.clientes.forEach(c => {
          this.demands.push({ idPedidos: r.idPedidos, nameCliente: c.idCliente, status: r.status, valorPedido: r.valorPedido });
        });
      });
    });
  }

  public getClientByClientId(id: string): void {
    this.clienteService.getById(id).subscribe(res => {
      this.clientes.push(res);
    });
  }

}
