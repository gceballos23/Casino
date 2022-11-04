"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(pNombre, pDinero) {
        this.nombre = pNombre;
        this.dinero = pDinero;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.setDinero = function (pDinero) {
        this.dinero = this.dinero + pDinero;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
