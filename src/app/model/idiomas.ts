export class Idiomas {
    id: number 
    idioma: string;
    nivel: string;
    progressId: number;

    constructor(idioma: string, nivel: string, progressId:number ){
        this.idioma = idioma;
        this.nivel = nivel;
        this.progressId = progressId;
    }


}
 