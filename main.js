"use strict";
exports.__esModule = true;
var jugador_1 = require("./jugador");
var jugadorTragamonedas_1 = require("./jugadorTragamonedas");
var casino_1 = require("./casino");
var tragamonedas3_1 = require("./tragamonedas3");
var tragamonedas5_1 = require("./tragamonedas5");
var slot_1 = require("./slot");
var JuegoDados_1 = require("./JuegoDados");
var JugadorDados_1 = require("./JugadorDados");
var mano_1 = require("./mano");
var dado_1 = require("./dado");
var ReadlineSync = require("readline-sync");
console.log(" ");
var miCasino = new casino_1.Casino();
var opciones = 0;
var input = ReadlineSync;
/* SE CREAN LOS JUEGOS */
var maquinaClasica = new tragamonedas3_1.Tragamoneda3("Tragamonedas Clasica", new slot_1.Slot(["Naranja", "Siete", "BarBar", "Pera", "Banana", "Cerezas"]), 3);
var maquinaAvanzada = new tragamonedas5_1.Tragamoneda5("Tragamonedas Avanzada", new slot_1.Slot(["Naranja", "Siete", "BarBar", "Pera", "Banana", "Cerezas"]), 5, 20000);
var juegoDeDados = new JuegoDados_1.JuegoDados("Juego Dados", new mano_1.Mano(new dado_1.Dado(), new dado_1.Dado()), 100);
var juegoDeDados2 = new JuegoDados_1.JuegoDados("Juego Dados", new mano_1.Mano(new dado_1.Dado(), new dado_1.Dado()), 100);
miCasino.agergarJuegos(maquinaClasica);
miCasino.agergarJuegos(maquinaAvanzada);
miCasino.agergarJuegos(juegoDeDados2);
miCasino.agergarJuegos(juegoDeDados);
/* SE INGRESA EL USUARIO */
miCasino.ingresoJugador(new jugador_1.Jugador(input.question("Ingrese un nombre para Registrarse: "), 0));
console.log(" ");
/* OPCIONES PARA JUGAR LOS DISTINTOS JUEGOS*/
opciones = Number(input.question("TRAGAMONEDAS 3 SLOTS: 1 - TRAGAMONEDAS 5 SLOTS : 2 - BLACKJACK: 3 - DADOS: 4 - 0 SALIR- "));
while (opciones > 0) {
    switch (opciones) {
        case 1:
            /*TRAGAMONEDAS*/
            var jugadorTM = new jugadorTragamonedas_1.JugadorTragamonedas(miCasino.getjugador(0).getNombre(), maquinaClasica, 0);
            console.log(" ");
            console.log(miCasino.getJuego(opciones - 1).getDescripcion());
            console.log(" ");
            jugadorTM.jugarTragamoneda();
            break;
        case 2:
            /*TRAGAMONEDAS*/
            var jugadorTM2 = new jugadorTragamonedas_1.JugadorTragamonedas(miCasino.getjugador(0).getNombre(), maquinaAvanzada, 0);
            console.log(" ");
            console.log(miCasino.getJuego(opciones - 1).getDescripcion());
            console.log(" ");
            jugadorTM2.jugarTragamoneda();
            break;
        case 3:
            /*BLACKJACK*/
            console.log("jugar BlackJack");
            break;
        case 4:
            /*DADOS*/
            var jugadorDeDados = new JugadorDados_1.JugadorDados(miCasino.getjugador(0).getNombre(), juegoDeDados, 0);
            console.log(" ");
            console.log(miCasino.getJuego(opciones - 1).getDescripcion());
            console.log(" ");
            jugadorDeDados.jugarDados();
            break;
        default:
            opciones = 0;
    }
    if (opciones > 0) {
        opciones = Number(input.question("TRAGAMONEDAS 3 SLOTS: 1 - TRAGAMONEDAS 5 SLOTS : 2 - BLACKJACK: 3 - DADOS: 4 - 0 SALIR- "));
    }
    if (opciones === 0) {
        console.log("Gracias por  jugar!!!");
        break;
    }
}
