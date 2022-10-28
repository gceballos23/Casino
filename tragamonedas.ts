import { Slot } from "./slot";

export class Tragamoneda{
    protected tipoSlot : Slot;
    protected cantidadSlot: number;
    protected slots: Slot[];
    protected ultimaJugada: string[];
    protected historialJugadas : string[];
    protected dineroIngresado: number;
    protected pozoTotal: number;
    protected jugadaPozoTotal : string;
    protected apuestaMinima : number;
    protected apuesta:number;

    constructor(ptipoSlot:Slot, pCantidadSlot:number,pPozoTotal:number){
        this.tipoSlot = ptipoSlot;
        this.cantidadSlot = pCantidadSlot;
        /* se carga la cantidad de slot */
        for( let i:number = 0; i<this.cantidadSlot; i++){
            this.slots.push(ptipoSlot);
        }
        this.ultimaJugada=[];
        this.historialJugadas=[];
        this.dineroIngresado=0;
        this.pozoTotal= pPozoTotal;
        this.jugadaPozoTotal = this.tipoSlot.getFiguraMayor();
        this.apuestaMinima = 1;
        this.apuesta = this.apuestaMinima;
    
    }

    

}