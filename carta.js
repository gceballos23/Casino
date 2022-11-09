"use strict";
exports.__esModule = true;
exports.Carta = void 0;
var Carta = /** @class */ (function () {
    function Carta(pPalo, pNombreCarta, pValorNUmerico) {
        this.palo = pPalo;
        this.nombreCarta = pNombreCarta;
        this.ValorNumerico = pValorNUmerico;
    }
    Carta.prototype.getPalo = function () {
        return this.palo;
    };
    Carta.prototype.setPalo = function (pPalo) {
        this.palo = pPalo;
    };
    Carta.prototype.getNombreCarta = function () {
        return this.nombreCarta;
    };
    Carta.prototype.setNombreCarta = function (pNombre) {
        this.nombreCarta = pNombre;
    };
    Carta.prototype.getValorNumerico = function () {
        return this.ValorNumerico;
    };
    Carta.prototype.setValorNumerico = function (pValor) {
        this.ValorNumerico = pValor;
    };
    Carta.prototype.setCarta = function (pPalo, pNombreCarta, pValorNumerico) {
        this.setPalo(pPalo);
        this.setNombreCarta(this.nombreCarta);
        this.setValorNumerico(this.ValorNumerico);
    };
    return Carta;
}());
exports.Carta = Carta;
