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
        this.cargarSlot();
        this.ultimaJugada=[];
        this.historialJugadas=[];
        this.dineroIngresado=0;
        this.pozoTotal= pPozoTotal;
        this.jugadaPozoTotal = this.tipoSlot.getFiguraMayor();
        this.apuestaMinima = 1;
        this.apuesta = this.apuestaMinima;
    
    }

    public getCantidadSlot():number{
        return this.cantidadSlot;
    }

    protected cargarSlot():void{
        for( let i:number = 0; i<this.cantidadSlot; i++){
            this.slots.push(this.tipoSlot);
        }      
    }

    public UltimaJugada():string[]{
        return this.ultimaJugada;
    }

    public getDineroIngesado():number{
        return this.dineroIngresado;
    }

    public IngresarDinero(pCantidad):void{
        this.dineroIngresado = this.dineroIngresado + pCantidad;
    }

    public getPozoTotal(): number{
        return this.pozoTotal;
    }

    protected incrementarPozoTotal():void{
        this.pozoTotal = this.pozoTotal + this.apuesta;
    }

    public setApuesta(pOpciones):void{
        switch(pOpciones) {
            case 2:
                this.apuesta = 3;
              break;
            case 3:
                this.apuesta = 5;
               break;  
            default:
                this.apuesta= 1;
        }
    }

    protected esApuestaGanadora():boolean{
        /* probalidad de 1 en 20 */
        let probabilidad : number[]=[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1]
        if  (probabilidad[Math.floor(Math.random() * probabilidad.length)] ===0){
            return true;
        }else{
            return false;
        } 
    }

    public TirarPalanca(){
        this.ultimaJugada = [];
        for( let i:number = 0; i<this.cantidadSlot; i++){
            this.ultimaJugada.push(this.slots[i].getUltimaJugada());
        }      
        
    }


}