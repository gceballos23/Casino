export class Slot{
    protected figuras : string[];
    protected UltimaJugada : string;

    constructor(pFiguras: string[]){
        this.figuras = pFiguras;
        this.UltimaJugada = this.figuras[0];

    }

    public girarSlots():void{
       this.UltimaJugada =this.figuras[Math.floor(Math.random() * this.figuras.length)];
    }

    public getFiguraMayor():string{
        return this.figuras[this.figuras.length - 1]     
    }

    public getUltimaJugada():string{
        return this.UltimaJugada;
    }
}