"use strict";
exports.__esModule = true;
exports.Slot = void 0;
var Slot = /** @class */ (function () {
    function Slot(pFiguras) {
        this.figuras = pFiguras;
        this.UltimaJugada = pFiguras[0];
        this.posicion = 0;
    }
    Slot.prototype.girarSlots = function () {
        var posicion = Math.floor(Math.random() * this.figuras.length);
        this.UltimaJugada = this.figuras[posicion];
        this.setPosicion(posicion);
    };
    /*FIGURA CON MAS PREMIO*/
    Slot.prototype.getFiguraMayor = function () {
        return this.figuras[this.figuras.length - 1];
    };
    Slot.prototype.getUltimaJugadaSola = function () {
        return this.UltimaJugada;
    };
    Slot.prototype.setPosicion = function (pIndice) {
        this.posicion = pIndice;
    };
    Slot.prototype.getposicion = function () {
        return this.posicion;
    };
    return Slot;
}());
exports.Slot = Slot;
