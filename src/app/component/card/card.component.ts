import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { LibrosService } from 'src/app/shared/libros.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService} from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  @Input() elementoPadre:Libros;
  @Output() eventoLibros = new EventEmitter<Number>();


  constructor() {}


  eliminarLibro() {
    console.log(this.elementoPadre.id_libro)
    this.eventoLibros.emit(this.elementoPadre.id_libro)
  }


  ngOnInit(): void {
  }

}
