"use strict";
exports.__esModule = true;
exports.Mano = void 0;
var Mano = /** @class */ (function () {
    function Mano(pDado1, pDado2) {
        this.dado1 = pDado1;
        this.dado2 = pDado2;
        this.ultimoResultado = 0;
        this.tirarDados();
    }
    Mano.prototype.getUltimoResultado = function () {
        return this.ultimoResultado;
    };
    Mano.prototype.getSumaDado = function () {
        this.ultimoResultado = this.dado1.getNumero() + this.dado2.getNumero();
    };
    Mano.prototype.tirarDados = function () {
        this.dado1.tirarDado();
        this.dado2.tirarDado();
        this.getSumaDado();
    };
    Mano.prototype.getValorString = function () {
        return this.dado1.getValorString() + " " + this.dado2.getValorString();
    };
    return Mano;
}());
exports.Mano = Mano;
