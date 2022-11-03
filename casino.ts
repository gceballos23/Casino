import { Jugador } from "./jugador";
import { JuegoCasino } from "./JuegoCasino";

export class Casino {
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

    public getJuego(indice: number):JuegoCasino{
        return this.juegos[indice]
    }

    public agergarJuegos(pJuego : JuegoCasino):void{
        this.juegos.push(pJuego);
        console.log("se agrego el siguiente Juego :" + pJuego.getNombre())
    }

    public eliminarJuegos(pJuego:JuegoCasino):void{
        let control : number = 0;
        for(let i:number=0; i<this.juegos.length; i++){
            if(pJuego.getNombre() === this.juegos[i].getNombre()){ 
                this.juegos.splice(i,1);
                console.log("Se Elimino el siguiente Juego del Casino: " + pJuego);
                control = 1;
                break;
            }
        }
        
        if (control === 0){
                throw new Error('No se encontro Juego');
         }
            
    }

    public ingresoJugador(pJugador: Jugador):void{
        this.jugadores.push(pJugador);
        console.log(pJugador.getNombre());
        console.log(this.bienvenida );
    }

    public salidaJugador(pJugador: Jugador):void{
        let control : number = 0;
        for(let i:number=0; i<this.jugadores.length; i++){
            if(pJugador.getNombre() === this.jugadores[i].getNombre()){ 
                this.jugadores.splice(i,1);
                console.log("Se Retiro el siguiente Jugador Casino: " + pJugador);
                control = 1;
                break;
            }
        }
        
        if (control === 0){
                throw new Error('No se encontro Jugador en el Casino');
         }            
    }

    public getjugador(pIndice : number): Jugador{
        return this.jugadores[pIndice];
    }
}