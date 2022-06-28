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
      

    }


    // enviarGetAll(input1: HTMLInputElement) {
    //   this.newlibro = [];

    //   let myUser:number = input1.valueAsNumber;
    //   console.log(myUser)

    //     this.librosService.getAll(myUser).subscribe((data:Libros[])=> {

    //         for( let i=0; i < data.length; i++) {
    //           this.newlibro.push(data[i])
    //         }
    //         console.log(data)
    //     })
    // }


    // anadirLibro2(input1:HTMLInputElement) {
    //     this.newlibro = [];

    //     let numero:number = input1.valueAsNumber;
    //     this.librosService.getOne(numero);

    //     this.newlibro.push(this.librosService.getOne(numero));
    // } 
  


    // eliminarLibro(libro:string) {

    //     let numero:number = parseInt(libro)

    //     this.librosService.delete(numero);
    //     // this.newlibro = this.librosService.getAll();
    // }



    buscaLibro(input1: HTMLInputElement) {

      if (input1.valueAsNumber) {

          console.log(input1.value)

          this.librosService.getOne(this.usuarioService.usuario.id_usuario, input1.valueAsNumber).subscribe( (data: Libros[]) => {

          this.newlibro = []

              for(let i = 0; i < data.length; i++) {

                if (data[i].id_libro == input1.valueAsNumber) {
                  this.newlibro.push(data[i])
                }
              }
         })

      }
        else
      {
          this.newlibro = [];

          this.librosService.getAll(this.usuarioService.usuario.id_usuario).subscribe( (data: Libros[]) => {  

            for( let i = 0; i < data.length; i++ ){
              this.newlibro.push(data[i]);  
            }

          })
    }
  }

    
    eliminarLibro(id_libro:HTMLInputElement) {

      this.newlibro = [];
      console.log(id_libro);
  
      let myIdLibro:number = id_libro.valueAsNumber

      if(id_libro != null) {
        this.librosService.delete(myIdLibro).subscribe((data: Libros[]) => {
          console.log( data );
        })
      }
  
    }


    ngOnInit(): void {

    }

  }
