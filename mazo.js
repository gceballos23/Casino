"use strict";
exports.__esModule = true;
exports.Mazo = void 0;
var carta_1 = require("./carta");
var Mazo = /** @class */ (function () {
    function Mazo() {
        this.cartas = [];
        this.generarCartas();
    }
    Mazo.prototype.generarCartas = function () {
        var palos = ["PICAS", "CORAZONES", "DIAMANTES", "TREBOLES"];
        for (var i = 0; i < palos.length; i++) {
            for (var j = 1; j <= 13; j++) {
                this.cartas.push(new carta_1.Carta(palos[i], this.setNombreCarta(j), this.setValorCarta(j)));
            }
        }
    };
    Mazo.prototype.setNombreCarta = function (valor) {
        var valorString = "";
        switch (valor) {
            case 1:
                valorString = "UNO";
                break;
            case 2:
                valorString = "DOS";
                break;
            case 3:
                valorString = "TRES";
                break;
            case 4:
                valorString = "CUATRO";
                break;
            case 5:
                valorString = "CINCO";
                break;
            case 6:
                valorString = "SEIS";
                break;
            case 7:
                valorString = "SIETE";
                break;
            case 8:
                valorString = "OCHO";
                break;
            case 9:
                valorString = "NUEVE";
                break;
            case 10:
                valorString = "DIEZ";
                break;
            case 11:
                valorString = "JACK";
                break;
            case 12:
                valorString = "QUEEN";
                break;
            case 13:
                valorString = "KING";
                break;
        }
        return valorString;
    };
    Mazo.prototype.setValorCarta = function (valor) {
        var valorCarta = 0;
        switch (valor) {
            case 1:
                valorCarta = 1;
                break;
            case 2:
                valorCarta = 2;
                break;
            case 3:
                valorCarta = 3;
                break;
            case 4:
                valorCarta = 4;
                break;
            case 5:
                valorCarta = 5;
                break;
            case 6:
                valorCarta = 6;
                break;
            case 7:
                valorCarta = 7;
                break;
            case 8:
                valorCarta = 8;
                break;
            case 9:
                valorCarta = 9;
                break;
            case 10:
                valorCarta = 10;
                break;
            case 11:
                valorCarta = 10;
                break;
            case 12:
                valorCarta = 10;
                break;
            case 13:
                valorCarta = 10;
                break;
        }
        return valorCarta;
    };
    Mazo.prototype.mezclarCartas = function () {
        var contador = this.cartas.length;
        while (contador > 0) {
            var index = Math.floor(Math.random() * contador);
            contador--;
            var temp = this.cartas[contador];
            this.cartas[contador] = this.cartas[index];
            this.cartas[index] = temp;
        }
    };
    Mazo.prototype.sacarCarta = function () {
        var cartAux = new carta_1.Carta(this.cartas[0].getPalo(), this.cartas[0].getNombreCarta(), this.cartas[0].getValorNumerico());
        this.cartas.splice(0, 1);
        return cartAux;
    };
    Mazo.prototype.vaciarMazo = function () {
        this.cartas = [];
    };
    Mazo.prototype.cartasEnelMazo = function () {
        return this.cartas.length;
    };
    return Mazo;
}());
exports.Mazo = Mazo;
