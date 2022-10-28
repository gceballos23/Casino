export class Slot{
    protected figuras : string[];
    protected UltimaJugada : string;

    constructor(pFiguras: string[]){
        this.figuras = pFiguras;
    }

    public girarSlots():void{
       this.UltimaJugada =this.figuras[Math.floor(Math.random() * this.figuras.length)];
    }
}