export class Jugador{
    protected nombre : string;
    protected dinero : number;

    constructor(pNombre:string, pDinero : number ){
        this.nombre = pNombre;
        this.dinero = pDinero;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(pNombre: string):void{
        this.nombre = pNombre;
    }

    public getDinero():number{
        return this.dinero;
    }

    public setDinero(pDinero: number):void{
        this.dinero = pDinero;
    }
}