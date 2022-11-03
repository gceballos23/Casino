import { Jugador } from "./jugador";
import { JuegoCasino } from "./JuegoCasino";

export class Casino{
    protected bienvenida : string;
    protected juegos: JuegoCasino[];
    protected jugadores : Jugador[];

    constructor (){
        this.bienvenida = "Bienvenido al Casino : VITO CORLEONE";
        this.juegos = [];
        this.jugadores = [];
    }

    public getBienvenida():string{
        return this.bienvenida;
    }

    public listarJuegos():JuegoCasino[]{
        return this.juegos;
    }

    public agergarJuegos():void{

    }

    public eliminarJUegos(pJuego:JuegoCasino):void{

    }

    public ingresoJugador(pJugador: Jugador):void{

    }

    public salidaJugador(pJUgador: Jugador):void{
        
    }
}