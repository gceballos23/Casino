"use strict";
exports.__esModule = true;
exports.Dado = void 0;
var Dado = /** @class */ (function () {
    function Dado() {
        this.valorString = [];
        this.setValorString();
        this.tirarDado();
    }
    Dado.prototype.getNumero = function () {
        return this.valorNumero;
    };
    Dado.prototype.getValorString = function () {
        return this.valorString[this.valorNumero - 1];
    };
    Dado.prototype.setNumero = function (pValorNumero) {
        this.valorNumero = pValorNumero + 1;
    };
    Dado.prototype.setValorString = function () {
        this.valorString = ["UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS"];
    };
    Dado.prototype.tirarDado = function () {
        this.setNumero(Math.floor(Math.random() * this.valorString.length));
    };
    return Dado;
}());
exports.Dado = Dado;
