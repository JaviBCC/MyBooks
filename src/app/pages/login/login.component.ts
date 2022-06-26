import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public myService: UsuarioService, public router:Router) { }


  loginUser(input1:HTMLInputElement,input2:HTMLInputElement) {

    let nesLogin:Usuario = new Usuario("", "", input1.value, "", input2.value) 
    this.myService.getRegistro(nesLogin).subscribe((data)=> {

        this.myService.logueado = true;
        this.myService.usuario = data[0];
        console.log(data[0])

        if (data[0].error == false) {
            this.router.navigateByUrl('/libros')
        }

  })

    console.log("enviamos")

  }
  ngOnInit(): void {
  }

}
