import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { LibrosService } from 'src/app/shared/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})

export class LibrosComponent implements OnInit {

  public newlibro: Libros[];

    constructor(public librosService: LibrosService) { 

        this.newlibro = librosService.getAll();

    }


    anadirLibro2(input1:HTMLInputElement) {
        this.newlibro = [];

        let numero:number = input1.valueAsNumber;
        this.librosService.getOne(numero);

        this.newlibro.push(this.librosService.getOne(numero));
    } 
  


    eliminarLibro(libro:string) {

        let numero:number = parseInt(libro)

        this.librosService.delete(numero);
        // this.newlibro = this.librosService.getAll();
    }

    ngOnInit(): void {

    }

  }




// constructor() { 

  //   this.newlibro = [
  //                     new Libros(1, 1, "Los Ojos del otro", "Tapa Dura", "Julian Martinez", "50€", "https://sirolopez.com/wp-content/gallery/portadas-libros/portadas-libros05.jpg"),
  //                     new Libros(2, 2, "Red Queen", "Tapa Dura", "Victoria Aveyard", "35€", "https://www.podiprint.com/wp-content/uploads/2018/03/red-queen.jpg"),
  //                     new Libros(3, 3, "Me llamaban Jack", "Tapa Blanda", "Crhistian James", "65€", "https://cordexizdesign.es/wp-content/uploads/2021/04/Portada_libro_terror_jack_destripador_londres_victoriano.jpg")
  //                   ]
  // }


  // public enviar(nuevoIdlibro:HTMLInputElement, nuevoIdusuario:HTMLInputElement, nuevoTitulo:HTMLInputElement, nuevoTipolibro:HTMLInputElement, nuevoAutor:HTMLInputElement, nuevoPrecio:HTMLInputElement, nuevoPhoto:HTMLInputElement) {

  //   let  nuevoLibro:Libros = new Libros(nuevoIdlibro.valueAsNumber, nuevoIdusuario.valueAsNumber, nuevoTitulo.value, nuevoTipolibro.value,  nuevoAutor.value, nuevoPrecio.value, nuevoPhoto.value) 
  //   this.newlibro.push(nuevoLibro);
  // }