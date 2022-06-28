import { Injectable } from '@angular/core';
import { Libros } from '../models/libros';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LibrosService {

  public newLibro: Libros[] = [];
  public url : string = "http://localhost:3000/libros";

  // constructor() { 
    constructor(private http: HttpClient) {}
  
  // this.newLibro = [
  //   new Libros(1, 1, "Los Ojos del otro", "Tapa Dura", "Julian Martinez", "50€", "https://sirolopez.com/wp-content/gallery/portadas-libros/portadas-libros05.jpg"),
  //   new Libros(2, 2, "Red Queen", "Tapa Dura", "Victoria Aveyard", "35€", "https://www.podiprint.com/wp-content/uploads/2018/03/red-queen.jpg"),
  //   new Libros(3, 3, "Me llamaban Jack", "Tapa Blanda", "Crhistian James", "65€", "https://cordexizdesign.es/wp-content/uploads/2021/04/Portada_libro_terror_jack_destripador_londres_victoriano.jpg")
  // ]}


  // public getAll():Libros[] {
  //   return this.newLibro;
  // }


    
  //   public getAll(id_usuario:number) {
  //     this.url = "http://localhost:3000/libros" + "/" + id_usuario
  //     return this.http.get(this.url)

  // }


  // public getOne(id_libro:number):Libros {

  //   let libro:Libros;
      
  //   for(let i = 0; i < this.newLibro.length; i++) {

  //     if (this.newLibro[i].id_libro == (id_libro)) {
  //       libro = this.newLibro[i];
  //     }
  //   }
  //     return libro;
  // }	


  // public add(libros: Libros):void {
  //   this.newLibro.push(libros)
  // }

//   public edit(libro:Libros):boolean {

//     for(let i = 0; i < this.newLibro.length; i++) {

//       if (this.newLibro[i].id_libro == (libro.id_libro)) {

//         this.newLibro[i] = libro;
//       }

//   } return true
// }


// public delete(id_libro:number):boolean {
    
    
//   let resultado = false;

//   for(let i = 0; i < this.newLibro.length; i++) {

    
//      if (this.newLibro[i].id_libro == (id_libro)) {
//         this.newLibro.splice(i, 1);
//         resultado = true;
//         console.log(i + "libro borrado" + id_libro);
        
//      }

//     // else {

//     // }
//   } 
//     return resultado;
// } 



  getAll(id_usuario:number ):Observable<Object>{

    console.log("Entro por GET ALL");

    return this.http.get(this.url + "?id_usuario=" + id_usuario);
    
  }


  getOne(id_usuario:number, id_libro: number):Observable<Object>{

    console.log("Entro por GET ONE");

    return this.http.get(this.url + "?id_libro=" + id_libro + "&id_usuario=" + id_usuario);
  
  }


  add(libros:Libros):Observable<Object>{
    console.log("Llego al POST del service")
    console.log(libros);
    return this.http.post(this.url, libros);
  }


  edit(libros:Libros):Observable<Object>{
    console.log("LLego al PUT del service")
    return this.http.put( this.url, libros);
    
  }


  delete(id_libro: number): Observable<Object> {

    return this.http.delete(this.url + "?id_libro=" + id_libro)

  }

}