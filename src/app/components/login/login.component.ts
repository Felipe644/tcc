import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  form:FormGroup;

  constructor(private router:Router, private dataShare:DataShareService, private formBuilder:FormBuilder)
  {
    this.form = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }

  ngOnInit(): void {
    
  }

  public login()
  {
    window.localStorage.setItem("usuarioLogado", JSON.stringify(this.form.value));
    this.router.navigate(["/pedidos"]);
  }

  
}
