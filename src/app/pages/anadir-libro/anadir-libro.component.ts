import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/shared/libros.service';
import { Libros } from 'src/app/models/libros'

@Component({
  selector: 'app-anadir-libro',
  templateUrl: './anadir-libro.component.html',
  styleUrls: ['./anadir-libro.component.css']
})
export class AnadirLibroComponent implements OnInit {

  public transferLibro: Libros;

  constructor(public librosService: LibrosService) { 
    
  }

   anadirLibro(input1:number,input2:number,input3:string,input4:string,input5:string,input6:string,input7:string) {
   let neslibro = new Libros(input1,input2,input3,input4,input5,input6,input7)
      this.librosService.add(neslibro);
   }


  ngOnInit(): void {

  }

  
}
