import { Jugador } from "./jugador";
import { JuegoDados } from "./JuegoDados";
import * as ReadlineSync from "readline-sync";

export class JugadorDados extends Jugador{
    protected dados :  JuegoDados;
    
    constructor(pNombre: string, pdados:JuegoDados, pDinero:number){
        super(pNombre,pDinero);
        this.dados = pdados;
    }

    public getDados():JuegoDados{
        return this.dados;
    }

    public setDados(pDados : JuegoDados):void{
        this.dados = pDados;
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



    /* METODO PARA SIMULAR UN MENU CON LAS OPCIONES :
        - SEGUIR JUGANDO 
        - INGRESO NUEVO DE DINERO
        - CAMBIAR LA APUESTA*/
    protected menuSeguirJugando():number{
        let input = ReadlineSync;
        let opcionSeguir : number = 0;
        let opcionDinero : number = 0;
        opcionSeguir = this.controlarOpcionNumerica( Number( input.question("Ingrese 1 si quiere jugar a los DADOS: ")));
        if (opcionSeguir === 1){  
            opcionDinero = this.controlarDineroIngresado(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea: ")));
            if (opcionDinero > 0) {
                this.dados.ingresarDinero(opcionDinero);
            }                       
            
            this.dados.setApuesta(this.controlarDineroIngresado(Number(input.question("Ingrese el Dinero a Apostar: "))));
            if (this.dados.getApuesta()===0){
                opcionSeguir = 0;
            }
        }

        return opcionSeguir
    }
    /* METODO PARA JUGAR AL TRAGAMONEDAS*/
    public jugarDados():void{
        while ((this.menuSeguirJugando() === 1)&&(this.dados.getDineroIngresado()>0)){
            if (this.dados.getApuesta() <= this.dados.getDineroIngresado()){
                  
                this.dados.jugar();
              
            } else {
               console.log("Error en la Apuesta. Verificar si tiene dinero suficiente o si la Apuesta es Mayor o igual Apuesta Minima") 
            }
        }
        console.log("Dinero a retirar: " + this.dados.getDineroIngresado());

        this.setDinero(this.dados.getDineroIngresado());
        this.dados.ingresarDinero(-this.dados.getDineroIngresado());
        
    }


}