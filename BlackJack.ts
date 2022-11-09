import { Mazo } from "./mazo";
import { JuegoCasino } from "./juegoCasino";
import { JugadorCrupier } from "./jugadorCrupier";
import { JugadorBlackJack } from "./jugadorBlackJack";
import * as ReadlineSync from "readline-sync";
import { Mano } from "./mano";


export class BlackJack extends JuegoCasino{
    protected mazoCartas: Mazo;
    protected crupier: JugadorCrupier;
    protected jugadorBJ: JugadorBlackJack;
    protected dineroIngresado: number;
    protected premio : number;
    protected apuesta : number;
    protected minimoApuesta:number;

    constructor(pNombre:string, pMazoCarta : Mazo, pCrupier : JugadorCrupier, pJugadorBJ: JugadorBlackJack){
        super(pNombre);
        this.mazoCartas = pMazoCarta;
        this.crupier = pCrupier;
        this.jugadorBJ = pJugadorBJ;
        this.dineroIngresado = 0;
        this.premio = 0;
        this.apuesta = 0;
        this.minimoApuesta= 100;
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
        this.dineroIngresado = this.dineroIngresado - this.apuesta;
    }

    public ingresarDinero(pCantidad : number):void{
        this.dineroIngresado = this.dineroIngresado + pCantidad;
    }

    public getDineroIngresado():number{
        return this.dineroIngresado;
    }

        /* METODO PARA VERIFICAR LA OPCION DE SEGUIR JUGANDO 
    SI INGRESA CUALQUIER OTRO VALOR QUE NO SEA 1 LO TOMARA COMO 0 */
    protected controlarOpcionNumerica(pOpcion : number): number{
        switch (pOpcion) {
            case 1:
                return 1;
                
            default:
                return 0;
        }
    }
    /* METODO PARA VERIFICAR DINERO INGRESADO */
    protected controlarDineroIngresado(pCantidad : number): number{
        if (isNaN(pCantidad)=== false && pCantidad > 0){ 
            return pCantidad
        } else {
            return 0;
        }

    }

    
    protected menuSeguirJugando():number{
        let input = ReadlineSync;
        let opcionSeguir : number = 0;
        let opcionDinero : number = 0;
        this.mazoCartas.mezclarCartas();
        opcionSeguir = this.controlarOpcionNumerica( Number( input.question("Ingrese 1 si quiere jugar al BlackJack: ")));
        if (opcionSeguir === 1){  
            opcionDinero = this.controlarDineroIngresado(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea: ")));
            if (opcionDinero > 0) {
                this.ingresarDinero(opcionDinero);
            }                       
            
            this.setApuesta(this.controlarDineroIngresado(Number(input.question("Ingrese el Dinero a Apostar: "))));
            if (this.getApuesta()===0){
                opcionSeguir = 0;
            }
        }

        return opcionSeguir
    }

    protected repartirPrimeraMano():void{
        for (let i = 0; i < 2; i++) {
            this.jugadorBJ.PedirCarta(this.mazoCartas.sacarCarta())
            this.crupier.PedirCarta(this.mazoCartas.sacarCarta())
        }
    }

    public jugarBlackJack():void{
        console.log(this.mazoCartas);

//        this.mazoCartas.mezclarCartas();       
        while ((this.menuSeguirJugando() === 1)&&(this.getDineroIngresado()>0)){
            if (this.getApuesta() <= this.getDineroIngresado()){
                if (this.mazoCartas.cartasEnelMazo() > 10){
                    console.log(this.mazoCartas.cartasEnelMazo());
                    this.jugar();              
                }    

            } else {
               console.log("Error en la Apuesta. Verificar si tiene dinero suficiente o si la Apuesta es Mayor o igual Apuesta Minima") 
            }
        }
        console.log("Dinero a retirar: " + this.getDineroIngresado());

        this.jugadorBJ.setDinero(this.getDineroIngresado());
        this.ingresarDinero(-this.getDineroIngresado());
    }

    protected mostrarCartasJugadorBJ():void{
        console.log("Cartas Crupier" + this.jugadorBJ.MostrarCartas());

    }

    protected mostrarCartasCrupier():void{
        console.log("Cartas Crupier: " + this.crupier.MostrarCartas());
    }


    protected verificarGanaJugador():boolean{
        if (this.jugadorBJ.getTotalMano()>21){
            return false;
        }else{
            if (this.jugadorBJ.getTotalMano() > this.crupier.getTotalMano()){
                return true;
            }else{
                return false;
            }
        }
    }

    

    protected jugar(){        
        let input = ReadlineSync;
        let gana : boolean = false;     
        // se reparten  las primeras  
        this.repartirPrimeraMano();

        //mostrar cartas
        this.mostrarCartasJugadorBJ();
        this.mostrarCartasCrupier();

        console.log(this.jugadorBJ.getTotalMano());
        console.log(this.crupier.getTotalMano());
        
        //juego del jugador
        while(this.jugadorBJ.getTotalMano()<=21){
            if (this.jugadorBJ.quedarse(input.question( "SE PLANTA??  si/no "))=== false){

               this.jugadorBJ.PedirCarta(this.mazoCartas.sacarCarta());
               this.mostrarCartasJugadorBJ(); 
            }else{
                break;
            }
        }
        //juego del crupier
        while(this.crupier.getTotalMano()<=21){
            if (this.crupier.quedarse()=== false){

               this.crupier.PedirCarta(this.mazoCartas.sacarCarta()); 
               this.mostrarCartasCrupier(); 
            }else{
                break;
            }
        }

        //verificar si gano jugador y realizar los pagos

        if (this.verificarGanaJugador()=== true){ 
            this.setPremio(this.calcularPremio())
            this.ingresarDinero(this.getPremio());            
        } else {
            this.restarDineroIngresado();
        }
            
        console.log("Premio: " + this.getPremio())
        console.log("Dinero: " + this.getDineroIngresado());
        this.setPremio(0);
        this.jugadorBJ.resetMano();
        this.crupier.resetMano();  

    }




}