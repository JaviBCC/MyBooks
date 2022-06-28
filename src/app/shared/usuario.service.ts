import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {


  private url:string;
  public  logueado:boolean; 
  public  usuario:Usuario; 
  

  constructor(private http: HttpClient) {
    this.logueado = false;
  }
    

  getRegistro(usuario:Usuario) {
   console.log("Paso por GET FALSO")
    console.log(usuario)
    console.log(usuario.nombre + " este es el nombre")
    this.url = "http://localhost:3000/login"
    return this.http.post(this.url, usuario)
  }


  postRegistro(usuario:Usuario) {
    console.log("Paso por POST")
    
    this.url = "http://localhost:3000/registro"
    console.log(usuario.nombre + " este es el nombre")
    return this.http.post(this.url, usuario)
  }

}
