export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    posicion: String;
    scope:String;
    ciudad:String;

    constructor(nombre:String, apellido:String, img:String, posicion:String, scope:String, ciudad:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.posicion = posicion;
        this.scope = scope;
        this.ciudad = ciudad;

    }
}