import { Jugador } from "./jugador";
import { JugadorTragamonedas } from "./jugadorTragamonedas";
import { Casino} from "./casino"
import { Tragamoneda3 } from "./tragamonedas3";
import { Tragamoneda5 } from "./tragamonedas5";
import { Slot } from "./slot";
import { JuegoDados } from "./JuegoDados"
import { JugadorDados } from "./JugadorDados";
import { Mano } from "./mano";
import { Dado } from "./dado";

import * as ReadlineSync from "readline-sync";
import { BlackJack } from "./BlackJack";
import { Mazo } from "./mazo";
import { JugadorCrupier } from "./jugadorCrupier";
import { JugadorBlackJack } from "./jugadorBlackJack";

console.log(" ");
let miCasino = new Casino();
let opciones = 0;
let input = ReadlineSync;

/* SE INGRESA EL USUARIO */

miCasino.ingresoJugador(new Jugador( input.question("Ingrese un nombre para Registrarse: "), 0));
console.log(" ");
/* SE CREAN LOS JUEGOS */
let maquinaClasica = new Tragamoneda3("Tragamonedas Clasica", new Slot(["Naranja","Siete","BarBar","Pera","Banana","Cerezas"]), 3);
let maquinaAvanzada = new Tragamoneda5("Tragamonedas Avanzada", new Slot(["Naranja","Siete","BarBar","Pera","Banana","Cerezas"]), 5,20000);
let juegoDeDados = new JuegoDados("Juego Dados",new Mano(new Dado(),new Dado()),100);
let mesaBlackJack = new BlackJack("BlackJack",new Mazo(), new JugadorCrupier("Crupier",0), new JugadorBlackJack(miCasino.getjugador(0).getNombre(),0))
miCasino.agergarJuegos(maquinaClasica);
miCasino.agergarJuegos(maquinaAvanzada);
miCasino.agergarJuegos(mesaBlackJack);
miCasino.agergarJuegos(juegoDeDados);

/* OPCIONES PARA JUGAR LOS DISTINTOS JUEGOS*/
opciones = Number(input.question("TRAGAMONEDAS 3 SLOTS: 1 - TRAGAMONEDAS 5 SLOTS : 2 - BLACKJACK: 3 - DADOS: 4 - 0 SALIR- "));
while (opciones > 0){
    switch(opciones) {
        case 1:
            /*TRAGAMONEDAS*/
            let jugadorTM = new JugadorTragamonedas(miCasino.getjugador(0).getNombre(),maquinaClasica,0);
            console.log(" ");
            console.log(miCasino.getJuego(opciones-1).getDescripcion());
            console.log(" ");
            jugadorTM.jugarTragamoneda();

          break;
          case 2:
            /*TRAGAMONEDAS*/
            let jugadorTM2 = new JugadorTragamonedas(miCasino.getjugador(0).getNombre(),maquinaAvanzada,0);
            console.log(" ");
            console.log(miCasino.getJuego(opciones-1).getDescripcion());
            console.log(" ");
            jugadorTM2.jugarTragamoneda();

          break;
        case 3:
            /*BLACKJACK*/
            console.log(" ");
            console.log(miCasino.getJuego(opciones-1).getDescripcion());
            mesaBlackJack.jugarBlackJack();
            console.log(" ");
           break;
        case 4:
            /*DADOS*/
            let jugadorDeDados = new JugadorDados(miCasino.getjugador(0).getNombre(),juegoDeDados,0) 
            console.log(" ");
            console.log(miCasino.getJuego(opciones-1).getDescripcion());
            console.log(" ");
            jugadorDeDados.jugarDados();
           break;  
        default:
            opciones = 0;

    }
    
    if (opciones > 0) {
        opciones = Number(input.question("TRAGAMONEDAS 3 SLOTS: 1 - TRAGAMONEDAS 5 SLOTS : 2 - BLACKJACK: 3 - DADOS: 4 - 0 SALIR- "));
    }

    if  (opciones === 0) {
        console.log("Gracias por  jugar!!!");
        break;
    }
}



