import { Slot } from "./slot";

export class Tragamoneda{
    protected tipoSlot : Slot;
    protected cantidadSlot: number;
    protected slots: Slot[];
    protected ultimaJugada: string[];
    protected historialJugadas : string[];
    protected dineroIngresado: number;
    protected pozoTotal: number;
    protected jugadaPozoTotal : string[];
    protected apuestaMinima : number;
    protected apuesta:number;
    protected premio : number;

    constructor(ptipoSlot:Slot, pCantidadSlot:number,pPozoTotal:number){
        this.tipoSlot = ptipoSlot;
        this.cantidadSlot = pCantidadSlot;
        /* se carga la cantidad de slot */
        this.cargarSlot();
        this.ultimaJugada=[];
        this.historialJugadas=[];
        this.dineroIngresado=0;
        this.pozoTotal= pPozoTotal;
        this.setJugadaPozoTotal();
        this.apuestaMinima = 1;
        this.apuesta = this.apuestaMinima;
        this.premio= 0;
    
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

    protected setUltimaJugada():void{ 
        this.ultimaJugada= [];
        for( let i:number = 0; i<this.cantidadSlot; i++){
            this.slots[i].girarSlots();
            this.ultimaJugada.push(this.slots[i].getUltimaJugada());
        } 
    }
    

    public getDineroIngesado():number{
        return this.dineroIngresado;
    }

    public IngresarDinero(pCantidad):void{
        this.dineroIngresado = this.dineroIngresado + pCantidad;
    }

    protected restarDineroIngresado():void{
        this.dineroIngresado = this.dineroIngresado - this.apuesta;
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

    protected probabilidadGanar():boolean{
        /* probalidad de 1 en 20 */
        let probabilidad : number[]=[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1]
        if  (probabilidad[Math.floor(Math.random() * probabilidad.length)] ===0){
            return true;
        }else{
            return false;
        } 
    }

    public getHistorialJugada():string[]{
        return  this.historialJugadas;
    }

    protected setHistorialJugadas():void{
        for( let i:number = 0; i<this.cantidadSlot; i++){
            this.historialJugadas.push(this.slots[i].getUltimaJugada());
        }  
    }

    protected getJugadaPozoTotal():string[]{
        return this.jugadaPozoTotal
    }

    protected setJugadaPozoTotal():void{
        for( let i:number = 0; i<this.cantidadSlot; i++){
            this.jugadaPozoTotal.push(this.slots[i].getFiguraMayor());
        }  
    }

    protected GanarPozo():boolean{
        if (this.jugadaPozoTotal = this.ultimaJugada) {
            return true;
        }else{
            return false;
        }
    }

    protected SaberSiEsJugadaGanadora():boolean{
        let ganadora : boolean = false;
        for( let i:number = 0; i<this.cantidadSlot - 1; i++){
            if (this.slots[i].getUltimaJugada() === this.slots[i +1].getUltimaJugada()){
                ganadora =   true;
            } else {
                ganadora = false;
                break;

            }
        } 
        return ganadora;

    }

    protected setPremio(pPremio:number):void{
        this.premio = pPremio;
    }

    public getPremio():number{
        return this.premio;
    }

    protected resetPremioPozo():void{
        this.pozoTotal = 100;
    }


    protected calcularPremio():number{
        return this.apuesta *  (this.slots[0].getposicion() + 1) * 10;
    }

    public TirarPalanca(){
        let control :number = 0;
        let probabilidad :boolean = this.probabilidadGanar(); 
        while (control ===  0 ) {       
            this.setUltimaJugada;            
            if ( this.SaberSiEsJugadaGanadora() === probabilidad ) {
                control = 1;
            }

        }

        this.setHistorialJugadas();

        if (this.SaberSiEsJugadaGanadora()){
            if (this.GanarPozo()){
                this.setPremio(this.getPozoTotal())
                this.IngresarDinero(this.getPremio);
                this.resetPremioPozo;

            }else{
                this.setPremio(this.calcularPremio())
                this.IngresarDinero(this.getPremio());
                this.incrementarPozoTotal();
            }
        } else {
            this.restarDineroIngresado();
        }

    }

}