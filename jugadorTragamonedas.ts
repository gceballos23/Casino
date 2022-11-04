import { Jugador } from "./jugador";
import { Tragamoneda3 } from "./tragamonedas3";
import * as ReadlineSync from "readline-sync";

export class JugadorTragamonedas extends Jugador{
    protected maquina : Tragamoneda3;
    
    constructor(pNombre: string, pMaquina:Tragamoneda3, pDinero:number){
        super(pNombre,pDinero);
        this.maquina = pMaquina;
    }

    public getMaquina():Tragamoneda3{
        return this.maquina;
    }

    public setMaquina(pMaquina: Tragamoneda3):void{
        this.maquina = pMaquina;
    }

    public controlarOpcionNumerica(pOpcion : number): number{
        switch (pOpcion) {
            case 1:
                return 1;
              
            default:
                return 0;
        }
    }

    public menuSeguirJugando():number{
        let input = ReadlineSync;
        let opcionSeguir : number = 0;
        let opcionDinero : number = 0;    
        opcionSeguir = this.controlarOpcionNumerica( Number( input.question("Ingrese 1 si quiere jugar Al Tragamonedas: ")));
        if (opcionSeguir === 1){  
            opcionDinero = Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea: "))          
            if (isNaN(opcionDinero)=== false){ 
                this.maquina.IngresarDinero(opcionDinero);
            } else {
                this.maquina.IngresarDinero(0);
            }           
            this.maquina.setApuesta(Number(input.question("APUESTA 1: 1 - FICHA APUESTA 2: 3 FICHAS - APUESTA3: 5 FICHAS: ")));
        }

        return opcionSeguir
    }





  

    public jugarTragamoneda():void{     
        while ((this.menuSeguirJugando() === 1)&&(this.maquina.getDineroIngesado()>0)){
            if (this.maquina.getApuesta() <= this.maquina.getDineroIngesado()){
                this.maquina.jugar();             
            } else {
               console.log("La apuesta es mayor a dinero que tiene!!") 
            }
        }
        console.log("Dinero a retirar: " + this.maquina.getDineroIngesado());

        this.setDinero(this.maquina.getDineroIngesado());
        this.maquina.IngresarDinero(-this.maquina.getDineroIngesado());
        
    }

}