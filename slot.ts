export class Slot{
    protected figuras : string[];
    protected UltimaJugada : string;
    protected posicion :number;

    constructor(pFiguras: string[]){
        this.figuras = pFiguras;
        this.UltimaJugada = pFiguras[0];
        this.posicion = 0;
    }

    public girarSlots():void{
       let posicion : number =  Math.floor(Math.random() * this.figuras.length);
       this.UltimaJugada =this.figuras[posicion];
       this.setPosicion(posicion);
    }
    /*FIGURA CON MAS PREMIO*/
    public getFiguraMayor():string{
        return this.figuras[this.figuras.length - 1]     
    }

    public getUltimaJugadaSola():string{
        return this.UltimaJugada;
    }

    protected setPosicion(pIndice : number):void{
        this.posicion = pIndice;
    }
    
    public getposicion():number{
        return this.posicion;
    }
}