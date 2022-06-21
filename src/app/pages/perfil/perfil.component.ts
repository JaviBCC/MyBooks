import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario1: Usuario;

  constructor() { 

    this.usuario1 = new Usuario(1, "Antonio", "Martinez", "antonio2@gmail.com", "../../../assets/fondo1.jpg","miPrima")

  }


  ngOnInit(): void {
  }

  public enviar(nuevoNombre:HTMLInputElement,nuevoApellido:HTMLInputElement,nuevoCorreo:HTMLInputElement,nuevoUrl:HTMLInputElement) {

      this.usuario1.nombre=nuevoNombre.value
      this.usuario1.apellidos=nuevoApellido.value
      this.usuario1.correo=nuevoCorreo.value
      this.usuario1.correo=nuevoUrl.value
      
  }

}
