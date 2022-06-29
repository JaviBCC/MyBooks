import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { LibrosService } from 'src/app/shared/libros.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService} from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})

export class LibrosComponent implements OnInit {

  public newlibro: Libros[] = [];
  public usuario: Usuario;



    constructor(public librosService: LibrosService, public usuarioService: UsuarioService) {
      
        this.usuario = usuarioService.usuario
    }


    buscaLibro(input1: HTMLInputElement) {

      if (input1.valueAsNumber) {

          console.log(input1.value)

          this.librosService.getOne(this.usuario.id_usuario, input1.valueAsNumber).subscribe( (data: Libros[]) => {

          this.newlibro = []
          console.log(data)
              // for(let i = 0; i < data.length; i++) {

              //   if (data[i].id_libro == input1.valueAsNumber) {
                  this.newlibro.push(data[0])
                // }
              // }
         })

      }
        else
      {
          this.newlibro = [];
          
          this.librosService.getAll(this.usuario.id_usuario).subscribe( (data: Libros[]) => {  

            for( let i = 0; i < data.length; i++ ){
              this.newlibro.push(data[i]);  
            }

          })
    }
  }

    
    eliminarLibro(id_libro:number) {

     
      console.log("entro por eliminar libro")
      console.log(id_libro);
  
      let myIdLibro:number = id_libro
      console.log(myIdLibro)



      if(id_libro != null) {

        for(let i = 0; i < this.newlibro.length; i++) {

          console.log("ENTRA AL IF?");
          if (this.newlibro[i].id_libro === (id_libro)) {

              // let elemBorrar = this.newlibro.indexOf
            console.log("IMPRESION DE EL ID DEL LIBRO");
            
              console.log(this.newlibro[i].id_libro)
              console.log(id_libro)
             
              // let elemBorrar = this.newlibro.indexOf(this.newlibro[i])
              // console.log(elemBorrar)
              console.log("PRIMERA IMPRESION DEL ARRAY");
              
              console.log(this.newlibro);
              this.newlibro.splice(i, 1);
              console.log("SEGUNDA IMPRESION DEL ARRAY");
              console.log(this.newlibro);
            
              console.log(i + "libro borrado" + id_libro);
          }
        }


        this.librosService.delete(myIdLibro).subscribe((data: Libros[]) => {
          console.log( data );

          // this.newlibro = [];
          
          // this.librosService.getAll(this.usuario.id_usuario).subscribe( (data: Libros[]) => {  

          //   for( let i = 0; i < data.length; i++ ){
          //     this.newlibro.push(data[i]);  
          //   } 

          // })       


        })
      }
  
    }


    ngOnInit(): void {

    }

  }
