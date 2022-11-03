"use strict";
exports.__esModule = true;
var jugador_1 = require("./jugador");
var jugadorTragamonedas_1 = require("./jugadorTragamonedas");
var casino_1 = require("./casino");
var tragamonedas_1 = require("./tragamonedas");
var slot_1 = require("./slot");
var ReadlineSync = require("readline-sync");
var miCasino = new casino_1.Casino();
var opciones = 0;
var input = ReadlineSync;
var maquinaClasica = new tragamonedas_1.Tragamoneda("Tragamonedas Clasica", new slot_1.Slot(["Naranja", "Siete", "BarBar", "Pera", "Banana", "Cerezas"]), 3);
miCasino.agergarJuegos(maquinaClasica);
miCasino.ingresoJugador(new jugador_1.Jugador("German", 500));
console.log(miCasino.getBienvenida());
opciones = Number(input.question("TRAGAMONEDAS: 1 - BLACKJACK: 2 - DADOS: 3 -- "));
while (opciones > 0) {
    switch (opciones) {
        case 1:
            var jugadorTM = new jugadorTragamonedas_1.JugadorTragamonedas(miCasino.getjugador(0).getNombre(), maquinaClasica, 1000);
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
    if (opciones === 0) {
        console.log("gracias por querer jugar");
    }
}
