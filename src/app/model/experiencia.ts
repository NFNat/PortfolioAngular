export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    positionE: string; //este lo agregue
    modoE: string;
    startE: string;
    endE: string;
    webE: string;
    imgE: string;




    constructor(nombreE: string, descripcionE: string, positionE: string, modoE: string, startE: string, endE: string, webE:string, imgE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;

        this.positionE = positionE;
        this.modoE = modoE;
        this.startE = startE;
        this.endE = endE;
        this.webE =  webE;
        this.imgE = imgE;
    }
}
