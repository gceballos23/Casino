import { Mano } from "./mano";
import { JuegoCasino } from "./juegoCasino";
//import * as ReadlineSync from "readline-sync";
import { resourceLimits } from "worker_threads";

export class JuegoDados extends JuegoCasino{
    protected mano : Mano;
    protected cantidadIntentos: number;
    protected IntentosHechos: number;
    protected UltimoNumero : number;
    protected dineroIgresado : number;
    protected minimoApuesta : number;
    protected apuesta : number;
    protected premio : number;

    constructor(pNombre: string, pMano: Mano){
        super(pNombre);
        this.mano = pMano;
        this.cantidadIntentos = 0;
        this.setCantidadIntentos(2);
        this.IntentosHechos = 1;
        this.UltimoNumero = 0;
        this.dineroIgresado = 0;
        this.minimoApuesta = 0;
        this.apuesta = 0;
        this.premio= 0;
    }

    public getMano():Mano{
        return  this.mano;
    }

    public SetMano(pMano: Mano):void{
        this.mano = pMano;
    }

    public getCantidadIntentos():number{
         return this.cantidadIntentos;
    }

    protected setCantidadIntentos(pCantidad : number) : void{
        this.cantidadIntentos = pCantidad;
    }

    protected setUltimoNumero(pValorNumero: number):void{
        this.UltimoNumero = pValorNumero;
    }

    public getIntentosHechos():number{
        return  this.IntentosHechos;
    }

    protected setIntentosHechos():void{
        this.IntentosHechos = this.IntentosHechos + 1;
    }

    protected calcularPremio():number{
        return this.apuesta * 2;
    }

    public getPremio():number{
        return this.premio;
    }

    protected setPremio(pCantidad : number):void{
        this.premio = pCantidad;
    }

    public getApuesta():number{
        return this.apuesta;
    }

    protected controlarApuesta(pApuesta: number):boolean{
        if (this.minimoApuesta > pApuesta){
            return false;
        } else {
            return true;
        }
    }

    public setApuesta(pCantidad: number):void{
        if (this.controlarApuesta(pCantidad)=== true){
            this.apuesta = pCantidad;
        } else{
            console.log("El minimo de Apuesta es: " + this.minimoApuesta)
        }
    }

    protected restarDineroIngresado():void{
        this.dineroIgresado = this.dineroIgresado - this.apuesta;
    }

    public ingresarDinero(pCantidad : number):void{
        this.dineroIgresado = this.dineroIgresado + pCantidad;
    }

    public getDineroIngresado():number{
        return this.dineroIgresado;
    }

    public getUltimoSuma():number{
        return this.UltimoNumero;
    }

    protected setUltimaSuma():void{
        this.mano.tirarDados();
        this.UltimoNumero = this.mano.getUltimoResultado();
    }

    protected setHistorialJugadas(pPremio: number):void{
        let historial : string = this.leerArchivo(this.nombre+"-historial.txt");
        historial = historial + "\n"; 
        historial = historial + this.mano.getValorString() + ",";
        historial = historial + pPremio;

        this.guardarArchivo(this.nombre+"-historial.txt",historial);  
    }

    public jugar(){
        let gano :number = 0;
        
        if (this.IntentosHechos <= this.cantidadIntentos && gano === 0) {  
            console.log("intento: " + this.IntentosHechos + " de " + this.cantidadIntentos);
            this.setUltimaSuma();                   
            if ( this.UltimoNumero === 7 || this.UltimoNumero === 11 ) {
                gano = 1;
            }
            this.setIntentosHechos();
        }

        if (gano =1){ 
            this.setPremio(this.calcularPremio())
            this.ingresarDinero(this.getPremio());            
        } else {
            if (this.IntentosHechos === this.cantidadIntentos ){
                this.restarDineroIngresado();
            }
            
        }

        this.setHistorialJugadas(this.getPremio());

        if (this.IntentosHechos === this.cantidadIntentos || gano === 1) {  
            console.log(this.mano.getValorString());
            console.log("Premio: " + this.getPremio())
            console.log("Dinero: " + this.getDineroIngresado());
            this.setPremio(0);
        }    
       
    }
}

    




