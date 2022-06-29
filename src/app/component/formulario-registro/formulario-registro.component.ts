import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/models/usuario'
import { FormGroup, NgForm } from '@angular/forms';
import { Registro } from 'src/app/models/registro';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})


export class FormularioRegistroComponent implements OnInit {
 
  public myForm: FormGroup;
  public usuario: Usuario;
  public registro: Registro;
 
 
    constructor(public myService: UsuarioService) 
    {  
      this.usuario  = new Usuario("","","","","");
      this.registro = new Registro(this.usuario,"")
    }
    
    onSubmit(form:NgForm){
      console.log(form.value)
      console.log(this.usuario)

      if(this.usuario.password != this.registro.password2){
        console.log("Entro por contraseñas distintas")

      }else{

        this.myService.postRegistro(this.usuario).subscribe((data:Usuario)=>{
          console.log(data)
          

        })

        form.reset();
      }
    }  


    // registerUser(input1:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement,input5:HTMLInputElement,input6:HTMLInputElement) {

    //   console.log("Paso antes de IF")

    //   if(input5.value == input6.value) {
    //     console.log("Paso por aqui Majo")
        
    //     let nesUsuario:Usuario = new Usuario(input1.value,input2.value,input3.value,input4.value,input5.value)

    //     console.log(nesUsuario)
    //     this.myService.postRegistro(nesUsuario).subscribe((data)=> {console.log(data)});
    //   }
    //   else { 
    //     console.log("VUELVE A METER LA CONTRASEÑA CACHO LERDO");
    //   }

    // }


  ngOnInit(): void {
  }


}
