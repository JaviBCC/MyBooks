import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public myService: UsuarioService) { }


  // loginUser(input1:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement,input5:HTMLInputElement,input6:HTMLInputElement) {

  //   let nesLogin:Usuario = new Usuario(input1.value,input2.value) 
  //   this.myService.getRegistro(nesLogin).subscribe((data)=> {console.log(data)});

  // }


  ngOnInit(): void {
  }





}
