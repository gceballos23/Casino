import { Jugador } from "./jugador";
import { JugadorTragamonedas } from "./jugadorTragamonedas";
import { Casino} from "./casino"
import { Tragamoneda } from "./tragamonedas";
import { Slot } from "./slot";

import * as ReadlineSync from "readline-sync";

let miCasino = new Casino();
let opciones = 0;
let input = ReadlineSync;
let maquinaClasica = new Tragamoneda("Tragamonedas Clasica", new Slot(["Naranja","Siete","BarBar","Pera","Banana","Cerezas"]), 3);

miCasino.agergarJuegos(maquinaClasica);

miCasino.ingresoJugador(new Jugador("German", 500));

console.log(miCasino.getBienvenida());


opciones = Number(input.question("TRAGAMONEDAS: 1 - BLACKJACK: 2 - DADOS: 3 -- "));

while (opciones > 0){
    switch(opciones) {
        case 1:
            let jugadorTM = new JugadorTragamonedas(miCasino.getjugador(0).getNombre(),maquinaClasica,1000);
            jugadorTM.jugarTragamoneda();

          break;
        case 2:
            console.log("jugar BlackJack");
           break;
        case 3:
            console.log("jugar Dados");
           break;  
        default:
            console.log("gracias por querer jugar");
    }

    opciones = Number(input.question("TRAGAMONEDAS: 1 - BLACKJACK: 2 - DADOS: 3 -- 0 SALIR"));
    if  (opciones === 0) {
        console.log("gracias por querer jugar");
    }
}



