import { Slot } from "./slot";
import { Tragamoneda3} from "./tragamonedas3"

export class Tragamoneda5 extends Tragamoneda3 {

    protected pozoTotal: number;
    protected jugadaPozoTotal : string[];

    constructor(pNOmbre: string,ptipoSlot:Slot, pCantidadSlot:number,pPozoTotal: number){
        super(pNOmbre,ptipoSlot,pCantidadSlot);  
        this.pozoTotal= pPozoTotal;
        this.jugadaPozoTotal = [];
        this.setJugadaPozoTotal();     
    }

    public getPozoTotal(): number{
        return this.pozoTotal;
    } 

    protected incrementarPozoTotal():void{
        this.pozoTotal = this.pozoTotal + this.apuesta;
    }

    protected getJugadaPozoTotal():string[]{
        return this.jugadaPozoTotal
    }

    protected setJugadaPozoTotal():void{
        for( let i:number = 0; i< this.cantidadSlot  ; i++){
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

    protected resetPremioPozo():void{
        this.pozoTotal = 200;
    }

    protected calcularPremio():number{
        return this.apuesta *  (this.slots[0].getposicion() + 1) * 10;
    }

    protected probabilidadGanar():boolean{
        /* probalidad de 1 en 20 */
       let probabilidad : number[]=[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1] 
       if  (probabilidad[Math.floor(Math.random() * probabilidad.length)] === 0){
            return true;
        }else{
            return false;
        } 
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

/*        this.setHistorialJugadas(); */

        if (this.SaberSiEsJugadaGanadora()){
            if (this.GanarPozo()){
                this.setPremio(this.getPozoTotal())
                this.IngresarDinero(this.getPremio());
                this.resetPremioPozo();

            }else{
                this.setPremio(this.calcularPremio())
                this.IngresarDinero(this.getPremio());
                this.incrementarPozoTotal();
            }
        } else {
            this.restarDineroIngresado();
        }

        console.log(this.getUltimaJugada());
        console.log("Premio: " + this.getPremio())
        console.log("Dinero: " + this.getDineroIngesado());
        this.setPremio(0);
    }

    
}