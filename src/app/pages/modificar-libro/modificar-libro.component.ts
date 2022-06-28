import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})



export class ModificarLibroComponent implements OnInit {

  public newlibro: Libros[];  

  constructor(public librosService: LibrosService) {}

  ngOnInit(): void {
  }


  modificarLibro(input1:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement,input5:HTMLInputElement,input6:HTMLInputElement,input7:HTMLInputElement) {

    let nuevolibro = new Libros(input1.valueAsNumber,input2.valueAsNumber,input3.value,input4.value,input5.value,input6.value,input7.value);
    console.log(nuevolibro)
    
    this.librosService.edit(nuevolibro).subscribe((data:Libros)=> 
      {
        this.newlibro.push(data)
      })
  }
}


