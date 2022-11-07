import { Dado } from "./dado";

export class Mano {
    protected dado1: Dado;
    protected dado2: Dado;
    protected ultimoResultado: number;

    constructor(pDado1 :Dado, pDado2: Dado){
        this.dado1 = pDado1;
        this.dado2 = pDado2;
        this.ultimoResultado = 0;
        this.tirarDados();
        
    }

    public getUltimoResultado():number{
        return this.ultimoResultado;
    }

    protected getSumaDado():void{
        this.ultimoResultado =  this.dado1.getNumero() + this.dado2.getNumero();
    }

    public tirarDados():void{
        this.dado1.tirarDado();
        this.dado2.tirarDado();
        this.getSumaDado();     
    }

    public getValorString(): string{
        return  this.dado1.getValorString() + " " + this.dado2.getValorString()
    }
        
}