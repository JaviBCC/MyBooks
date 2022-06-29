import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { Usuario } from 'src/app/models/usuario';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})



export class ModificarLibroComponent implements OnInit {

  public newlibro: Libros[];  
  public usuario: Usuario;

  constructor(public librosService: LibrosService, public usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario
  }

  ngOnInit(): void {
  }


  modificarLibro(input1:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement,input5:HTMLInputElement,input6:HTMLInputElement,input7:HTMLInputElement) {

    let nuevolibro = new Libros(input1.valueAsNumber,this.usuario.id_usuario,input3.value,input4.value,input5.value,input6.value,input7.value);
    console.log(nuevolibro)
    
    this.librosService.edit(nuevolibro).subscribe((data:Libros)=> 
      {
        console.log(data);
      })
  }
}


