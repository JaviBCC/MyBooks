import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public usuario:Usuario;

  constructor(public myService: UsuarioService, public router:Router) { 

      this.usuario = new Usuario("", "", "", "", "")
  }


  onSubmit(form:NgForm){

    this.myService.getRegistro(this.usuario).subscribe((data:any)=>{

      if(data.error == true){
        this.myService.logueado = false;
        this.myService.usuario = null;     

      }else{

        this.myService.logueado = true;
        this.myService.usuario = data.result[0];   
        this.router.navigateByUrl('/libros')
      }
    })
  }



  // loginUser(input1:HTMLInputElement,input2:HTMLInputElement) {
  //   console.log("login inicializado")

  //   let nesLogin:Usuario = new Usuario("", "", input1.value, "", input2.value) 

  //   this.myService.getRegistro(nesLogin).subscribe((data:any)=> {

  //     console.log(data);

  //     if(data.error == true) {
  //       this.myService.logueado = false;
  //       this.myService.usuario =null; 
        
  //     } else {
  //         this.myService.logueado = true;
  //         this.myService.usuario = data.result[0];
  //         this.router.navigateByUrl('/libros')
  //     }

  // })

  //   console.log("enviamos")

  // }




  ngOnInit(): void {
  }

}
