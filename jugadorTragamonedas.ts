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

    public jugarTragamoneda():void{
        let input = ReadlineSync;
        
        this.maquina.cargarSlot();
        let seguirJugando : number;
        seguirJugando = Number( input.question("Ingrese 1 si quiere jugar Al Tragamonedas: "));
        if (seguirJugando === 1){
            this.maquina.IngresarDinero(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea de dinero: ")));
            while (this.maquina.getDineroIngesado() > this.getDinero()){
                this.maquina.IngresarDinero(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea de dinero: ")));
                if (this.maquina.getDineroIngesado() > this.getDinero()) {
                    console.log("Debe ingresar un monto menor o igual a: " + this.getDinero())
                }
            } 
            
            this.maquina.setApuesta(Number(input.question("APUESTA 1: 1 - FICHA APUESTA 2: 3 FICHAS - APUESTA3: 5 FICHAS: ")));
        }
        
        
        
        while ((seguirJugando === 1)&&(this.maquina.getDineroIngesado()>0)){
            if (this.maquina.getApuesta() <= this.maquina.getDineroIngesado()){
                this.maquina.jugar();
             
            } else {
               console.log("La apuesta es mayor a dinero que tiene!!") 
            }
        
            seguirJugando = Number(input.question("Ingrese 1 para Seguir Jugando : "));
            if (seguirJugando === 1){
                while (this.maquina.getDineroIngesado() > this.getDinero()){
                    this.maquina.IngresarDinero(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea de dinero: ")));
                    if (this.maquina.getDineroIngesado() > this.getDinero()) {
                        console.log("Debe ingresar un monto menor o igual a: " + this.getDinero())
                    }
                } 
                this.maquina.setApuesta(Number(input.question("APUESTA 1: 1 - FICHA APUESTA 2: 3 FICHAS - APUESTA3: 5 FICHAS: ")));
        
            }
        }
        
        console.log("Dinero a retirar: " + this.maquina.getDineroIngesado());

        this.setDinero(this.maquina.getDineroIngesado());
        this.maquina.IngresarDinero(-this.maquina.getDineroIngesado());
        console.log("Dinero en maquina: " + this.maquina.getDineroIngesado());

    }

}