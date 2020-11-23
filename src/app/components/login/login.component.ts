import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  constructor(private router:Router, private dataShare:DataShareService)
  {

  }

  ngOnInit(): void {
    
  }

  public login()
  {
    window.localStorage.setItem("usuarioLogado", JSON.stringify({"nome": "123", "senha":"123"}));
    this.router.navigate(["/pedidos"]);
  }

  
}
