"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.JugadorBlackJack = void 0;
var jugador_1 = require("./jugador");
var JugadorBlackJack = /** @class */ (function (_super) {
    __extends(JugadorBlackJack, _super);
    function JugadorBlackJack(pNombre, pDinero) {
        var _this = _super.call(this, pNombre, pDinero) || this;
        _this.mano = [];
        return _this;
    }
    JugadorBlackJack.prototype.resetMano = function () {
        this.mano = [];
    };
    JugadorBlackJack.prototype.getMano = function () {
        return this.mano;
    };
    JugadorBlackJack.prototype.PedirCarta = function (pCarta) {
        this.mano.push(pCarta);
    };
    JugadorBlackJack.prototype.getTotalMano = function () {
        var temp_TotalMano = 0;
        for (var index = 0; index < this.mano.length; index++) {
            temp_TotalMano = temp_TotalMano + this.mano[index].getValorNumerico();
        }
        return temp_TotalMano;
    };
    JugadorBlackJack.prototype.quedarse = function (respuesta) {
        if (respuesta.toLowerCase() === "si") {
            return true;
        }
        else {
            return false;
        }
    };
    JugadorBlackJack.prototype.MostrarCartas = function () {
        var cartasMostrar = " ";
        for (var index = 0; index < this.mano.length; index++) {
            cartasMostrar = cartasMostrar + " " + this.mano[index].getNombreCarta() + " ";
        }
        return cartasMostrar;
    };
    return JugadorBlackJack;
}(jugador_1.Jugador));
exports.JugadorBlackJack = JugadorBlackJack;
