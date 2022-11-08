import { Mano } from "./mano";
import { JuegoCasino } from "./juegoCasino";
import * as ReadlineSync from "readline-sync";
import { resourceLimits } from "worker_threads";

export class JuegoDados extends JuegoCasino{
    protected mano : Mano;
    protected cantidadIntentos: number;
    protected intentosHechos: number;
    protected ultimoNumero : number;
    protected dineroIgresado : number;
    protected minimoApuesta : number;
    protected apuesta : number;
    protected premio : number;

    constructor(pNombre: string, pMano: Mano){
        super(pNombre);
        this.mano = pMano;
        this.cantidadIntentos = 0;
        this.setCantidadIntentos(2);
        this.intentosHechos = 1;
        this.ultimoNumero = 0;
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
        this.ultimoNumero = pValorNumero;
    }

    public getIntentosHechos():number{
        return  this.intentosHechos;
    }

    protected setIntentosHechos():void{
        this.intentosHechos++;
    }

    protected resetIntentos():void{
        this.intentosHechos = 1;
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
        return this.ultimoNumero;
    }

    protected setUltimaSuma():void{
        this.mano.tirarDados();
        this.ultimoNumero = this.mano.getUltimoResultado();
    }

    protected setHistorialJugadas(pPremio: number):void{
        let historial : string = this.leerArchivo(this.nombre+"-historial.txt");
        historial = historial + "\n"; 
        historial = historial + this.mano.getValorString() + ",";
        historial = historial + pPremio;

        this.guardarArchivo(this.nombre+"-historial.txt",historial);  
    }

    protected tirarDados():void{
        this.setUltimaSuma();    
        console.log(this.mano.getValorString());   
    }

    protected verificarTiroGanador():boolean{
        if ( this.ultimoNumero === 7 || this.ultimoNumero === 11 ) {
            return true;
        } else{
           return false;   
        }       
    }

    public jugar(){
        let gano :number = 0;
        let input = ReadlineSync;
        for (this.intentosHechos = 1; this.intentosHechos <= this.cantidadIntentos; this.intentosHechos++) {        
            console.log("intento: " + this.intentosHechos + " de " + this.cantidadIntentos);
            input.question("Presione Enter para hacer el un nuvo intento: ");  
   
            this.tirarDados();
            if (this.verificarTiroGanador()=== true){ 
                gano = 1;
                break;
            }
            this.setHistorialJugadas(this.getPremio());
        }

        if (gano ===1){ 
            this.setPremio(this.calcularPremio())
            this.ingresarDinero(this.getPremio());            
        } else {
            this.restarDineroIngresado();
        }
            
        console.log("Premio: " + this.getPremio())
        console.log("Dinero: " + this.getDineroIngresado());
        this.setPremio(0);
        this.resetIntentos();
        this.setIntentosHechos();
          
    }
}

    




