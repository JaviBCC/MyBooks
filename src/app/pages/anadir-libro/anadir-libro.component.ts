import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/shared/libros.service';
import { Libros } from 'src/app/models/libros'
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-anadir-libro',
  templateUrl: './anadir-libro.component.html',
  styleUrls: ['./anadir-libro.component.css']
})


export class AnadirLibroComponent implements OnInit {

  public transferLibro: Libros[];
  public usuario: Usuario;

  constructor(public librosService: LibrosService, public usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario
  }
    
 
  ngOnInit(): void {

  }


  anadirLibro(input3:string,input4:string,input5:string,input6:string,input7:string) {
    let neslibro = new Libros(0,this.usuario.id_usuario,input3,input4,input5,input6,input7)
       this.librosService.add(neslibro).subscribe((data:Libros) =>
        {
         console.log(data);
  
        })
  }
}
