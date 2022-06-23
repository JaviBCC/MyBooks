import { Injectable } from '@angular/core';
import { Libros } from '../models/libros'

@Injectable({
  providedIn: 'root'
})

export class LibrosService {

  public newLibro: Libros[];
    
  constructor() { 

  
  this.newLibro = [
    new Libros(1, 1, "Los Ojos del otro", "Tapa Dura", "Julian Martinez", "50€", "https://sirolopez.com/wp-content/gallery/portadas-libros/portadas-libros05.jpg"),
    new Libros(2, 2, "Red Queen", "Tapa Dura", "Victoria Aveyard", "35€", "https://www.podiprint.com/wp-content/uploads/2018/03/red-queen.jpg"),
    new Libros(3, 3, "Me llamaban Jack", "Tapa Blanda", "Crhistian James", "65€", "https://cordexizdesign.es/wp-content/uploads/2021/04/Portada_libro_terror_jack_destripador_londres_victoriano.jpg")
  ]}


  public add(libros: Libros):void {
     this.newLibro.push(libros)
  }


  public getAll():Libros[] {
    return this.newLibro;
  }

  
  public getOne(id_libro:number):Libros {

    let libro:Libros;
      
    for(let i = 0; i < this.newLibro.length; i++) {

      if (this.newLibro[i].id_libro == (id_libro)) {
        libro = this.newLibro[i];
      }
    }
      return libro;
  }	



  public edit(libro:Libros):boolean {


    for(let i = 0; i < this.newLibro.length; i++) {

      if (this.newLibro[i].id_libro == (libro.id_libro)) {

        this.newLibro[i] = libro;
      }

  } return true

}



  public delete(id_libro:number):boolean {
    console.log(id_libro)
    
    for(let i = 0; i < this.newLibro.length; i++) {

       console.log(this.newLibro[i].id_libro)

       if (this.newLibro[i].id_libro == (id_libro)) {
          this.newLibro.splice(i, 1);
          
      // }
      //  else {
      //     return false;
      
      }
    } return true;
  } 
}