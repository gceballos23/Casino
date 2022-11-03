"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino() {
        this.bienvenida = "Bienvenido al Casino : VITO CORLEONE";
        this.juegos = [];
        this.jugadores = [];
    }
    Casino.prototype.getBienvenida = function () {
        return this.bienvenida;
    };
    Casino.prototype.listarJuegos = function () {
        return this.juegos;
    };
    Casino.prototype.getJuego = function (indice) {
        return this.juegos[indice];
    };
    Casino.prototype.agergarJuegos = function (pJuego) {
        this.juegos.push(pJuego);
        console.log("se agrego el siguiente Juego :" + pJuego.getNombre());
    };
    Casino.prototype.eliminarJuegos = function (pJuego) {
        var control = 0;
        for (var i = 0; i < this.juegos.length; i++) {
            if (pJuego.getNombre() === this.juegos[i].getNombre()) {
                this.juegos.splice(i, 1);
                console.log("Se Elimino el siguiente Juego del Casino: " + pJuego);
                control = 1;
                break;
            }
        }
        if (control === 0) {
            throw new Error('No se encontro Juego');
        }
    };
    Casino.prototype.ingresoJugador = function (pJugador) {
        this.jugadores.push(pJugador);
        console.log(pJugador.getNombre());
        console.log(this.bienvenida);
    };
    Casino.prototype.salidaJugador = function (pJugador) {
        var control = 0;
        for (var i = 0; i < this.jugadores.length; i++) {
            if (pJugador.getNombre() === this.jugadores[i].getNombre()) {
                this.jugadores.splice(i, 1);
                console.log("Se Retiro el siguiente Jugador Casino: " + pJugador);
                control = 1;
                break;
            }
        }
        if (control === 0) {
            throw new Error('No se encontro Jugador en el Casino');
        }
    };
    Casino.prototype.getjugador = function (pIndice) {
        return this.jugadores[pIndice];
    };
    return Casino;
}());
exports.Casino = Casino;
