"use strict";
exports.__esModule = true;
var jugador_1 = require("./jugador");
var jugadorTragamonedas_1 = require("./jugadorTragamonedas");
var casino_1 = require("./casino");
var tragamonedas3_1 = require("./tragamonedas3");
var tragamonedas5_1 = require("./tragamonedas5");
var slot_1 = require("./slot");
var ReadlineSync = require("readline-sync");
var miCasino = new casino_1.Casino();
var opciones = 0;
var input = ReadlineSync;
var maquinaClasica = new tragamonedas3_1.Tragamoneda3("Tragamonedas Clasica", new slot_1.Slot(["Naranja", "Siete", "BarBar", "Pera", "Banana", "Cerezas"]), 3);
var maquinaAvanzada = new tragamonedas5_1.Tragamoneda5("Tragamonedas Avanzada", new slot_1.Slot(["Naranja", "Siete", "BarBar", "Pera", "Banana", "Cerezas"]), 5, 20000);
miCasino.agergarJuegos(maquinaClasica);
miCasino.agergarJuegos(maquinaAvanzada);
miCasino.ingresoJugador(new jugador_1.Jugador("German", 500));
console.log(" ");
opciones = Number(input.question("TRAGAMONEDAS 3 SLOTS: 1 - TRAGAMONEDAS 5 SLOTS : 2 - BLACKJACK: 3 - DADOS: 4 - 0 SALIR- "));
while (opciones > 0) {
    switch (opciones) {
        case 1:
            var jugadorTM = new jugadorTragamonedas_1.JugadorTragamonedas(miCasino.getjugador(0).getNombre(), maquinaClasica, 1000);
            console.log(" ");
            console.log(miCasino.getJuego(opciones - 1).getDescripcion());
            console.log(" ");
            jugadorTM.jugarTragamoneda();
            break;
        case 2:
            var jugadorTM2 = new jugadorTragamonedas_1.JugadorTragamonedas(miCasino.getjugador(0).getNombre(), maquinaAvanzada, 1000);
            console.log(" ");
            console.log(miCasino.getJuego(opciones - 1).getDescripcion());
            console.log(" ");
            jugadorTM2.jugarTragamoneda();
            break;
        case 3:
            console.log("jugar BlackJack");
            break;
        case 4:
            console.log("jugar Dados");
            break;
        default:
            opciones = 0;
    }
    if (opciones > 0) {
        opciones = Number(input.question("TRAGAMONEDAS 3 SLOTS: 1 - TRAGAMONEDAS 5 SLOTS : 2 - BLACKJACK: 3 - DADOS: 4 - 0 SALIR- "));
    }
    if (opciones === 0) {
        console.log("Gracias por querer jugar");
        break;
    }
}
