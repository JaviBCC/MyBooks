export class Libros {

    public id_libro: number
    public id_usuario: number
    public titulo: string
    public tipo: string
    public autor: string
    public precio: string
    public url: string


    constructor(id_libro: number, id_usuario:number, titulo:string, tipo:string, autor:string, precio:string, url:string){

        this.id_libro       = id_libro;
        this.id_usuario     = id_usuario;
        this.titulo         = titulo;
        this.tipo           = tipo;
        this.autor          = autor;
        this.precio         = precio;
        this.url            = url;

    }
}
