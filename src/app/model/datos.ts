export class Datos {
    id: number;
    nombre: string;
    ocupacion: string;
    nivel: string;
    lugar: string;
    imagen: string;

    constructor( nombre: string, ocupacion: string, nivel:string, lugar:string, imagen:string){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.nivel = nivel;
        this.lugar = lugar;
        this.imagen = imagen;

    }   

}
