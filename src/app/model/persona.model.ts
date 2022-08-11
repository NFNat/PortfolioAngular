export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    posicion: string;
    scope:string;
    ciudad:string;
    about:string;

    constructor(nombre: string, apellido:string, img:string, posicion:string, scope:string, ciudad:string, about:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.posicion = posicion;
        this.scope = scope;
        this.ciudad = ciudad;
        this.about = about;

    }
}