export class Educacion {
    id: number;
    schoolEd: string;
    titleEd: string;
    careerEd: string;
    startEd: string;
    endEd: string;
    webEd: string;
    imgEd: string;

    constructor(schoolEd: string, titleEd: string, careerEd: string, startEd: string, endEd: string, webEd: string, imgEd:string){
    this.schoolEd = schoolEd;
    this.titleEd= titleEd;
    this.careerEd = careerEd;
    this.startEd = startEd;
    this.endEd = endEd;
    this.webEd = webEd;
    this.imgEd= imgEd;
    }
}
