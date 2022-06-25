export class Usuario {

    public id_usuario: Number
    public nombre: String
    public apellidos: String
    public correo: String
    public url: String
    public password: String


    constructor(nombre: String, apellidos: String, correo: String, url: String, password: String)
    {
        // this.id_usuario     = id_usuario;
        this.nombre         = nombre;
        this.apellidos      = apellidos;
        this.correo         = correo;
        this.url            = url;
        this.password       = password;

    }

}
