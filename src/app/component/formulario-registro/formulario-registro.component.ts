import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/models/usuario'

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})


export class FormularioRegistroComponent implements OnInit {
 
 
    constructor(public myService: UsuarioService) {}

    
    registerUser(input1:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement,input5:HTMLInputElement,input6:HTMLInputElement) {

      console.log("Paso antes de IF")

      if(input5.value == input6.value) {
        console.log("Paso por aqui Majo")
        
        let nesUsuario:Usuario = new Usuario(input1.value,input2.value,input3.value,input4.value,input5.value)

        console.log(nesUsuario)
        this.myService.postRegistro(nesUsuario).subscribe((data)=> {console.log(data)});
      }
      else { 
        console.log("VUELVE A METER LA CONTRASEÑA CACHO LERDO");
      }

    }


  ngOnInit(): void {
  }


}
