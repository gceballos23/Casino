import { Slot } from "./slot";
import { JuegoCasino } from "./JuegoCasino";

export class Tragamoneda3 extends JuegoCasino {
    protected tipoSlot : Slot;
    protected cantidadSlot: number;
    protected slots: Slot[];
    protected ultimaJugada: string[];
    protected dineroIngresado: number;
    protected apuestaMinima : number;
    protected apuesta:number;
    protected premio : number;

    constructor(pNOmbre: string,ptipoSlot:Slot, pCantidadSlot:number){
        super(pNOmbre);
        this.tipoSlot = ptipoSlot;
        this.cantidadSlot = pCantidadSlot;
        this.slots = [];
        this.ultimaJugada=[];
        this.dineroIngresado=0;
        this.apuestaMinima = 1;
        this.apuesta = this.apuestaMinima;
        this.premio= 0;
        /* se carga la cantidad de slot */
        this.cargarSlot(); 
    
    }

    public getCantidadSlot():number{
        return this.cantidadSlot;
    }

    public cargarSlot():void{
        for( let i:number = 0; i<this.cantidadSlot; i++){
            this.slots.push(this.tipoSlot);
            this.slots[i].girarSlots();
        }      
    }

    public getUltimaJugada():string[]{
        return this.ultimaJugada;
    }

    protected setUltimaJugada():void{ 
        this.ultimaJugada = [];        
        for( let i:number = 0; i < this.cantidadSlot ; i++){
            this.slots[i].girarSlots();
            this.ultimaJugada.push(this.slots[i].getUltimaJugadaSola());
        } 
    }
    

    public getDineroIngesado():number{
        return this.dineroIngresado;
    }

    public IngresarDinero(pCantidad :number):void{
        this.dineroIngresado = this.dineroIngresado + pCantidad;
    }

    protected restarDineroIngresado():void{
        this.dineroIngresado = this.dineroIngresado - this.apuesta;
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

    public getApuesta():number{
        return this.apuesta;
    }

    protected probabilidadGanar():boolean{
        /* probalidad de 1 en 5 */
       let probabilidad : number[]=[1,1,0,1,1] 
       if  (probabilidad[Math.floor(Math.random() * probabilidad.length)] === 0){
            return true;
        }else{
            return false;
        } 
    }
/*
    public getHistorialJugada():string[]{
        return  this.historialJugadas;
    }

    protected setHistorialJugadas():void{
        for( let i:number = 0; i< this.cantidadSlot ; i++){
            this.historialJugadas.push(this.slots[i].getUltimaJugadaSola());
        }  
    }
*/
    protected SaberSiEsJugadaGanadora():boolean{
        let ganadora : boolean = false;
        
        for (let i:number = 0; i < this.cantidadSlot -1; i++){

            if (this.ultimaJugada[i] === this.ultimaJugada[i+1]){
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
    protected calcularPremio():number{
        return this.apuesta *  (this.slots[0].getposicion() + 1) * 10;
    }

    public jugar():void{
        let control :number = 0;
        let jugadaGanadora = this.probabilidadGanar();
        while (control < 1 ) {    
            this.setUltimaJugada();          
            if ( jugadaGanadora === this.SaberSiEsJugadaGanadora() ) {
                control = 1;
            }

        }

//        this.setHistorialJugadas();

        if (this.SaberSiEsJugadaGanadora()){
     
                this.setPremio(this.calcularPremio())
                this.IngresarDinero(this.getPremio());
                
  
        } else {
            this.restarDineroIngresado();
        }

        console.log(this.getUltimaJugada());
        console.log("Premio: " + this.getPremio())
        console.log("Dinero: " + this.getDineroIngesado());
        this.setPremio(0);

    }

}