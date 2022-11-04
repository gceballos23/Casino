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
exports.Tragamoneda5 = void 0;
var tragamonedas3_1 = require("./tragamonedas3");
var Tragamoneda5 = /** @class */ (function (_super) {
    __extends(Tragamoneda5, _super);
    function Tragamoneda5(pNOmbre, ptipoSlot, pCantidadSlot, pPozoTotal) {
        var _this = _super.call(this, pNOmbre, ptipoSlot, pCantidadSlot) || this;
        _this.pozoTotal = pPozoTotal;
        _this.jugadaPozoTotal = [];
        _this.setJugadaPozoTotal();
        return _this;
    }
    Tragamoneda5.prototype.getPozoTotal = function () {
        return this.pozoTotal;
    };
    Tragamoneda5.prototype.incrementarPozoTotal = function () {
        this.pozoTotal = this.pozoTotal + this.apuesta;
    };
    Tragamoneda5.prototype.getJugadaPozoTotal = function () {
        return this.jugadaPozoTotal;
    };
    Tragamoneda5.prototype.setJugadaPozoTotal = function () {
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.jugadaPozoTotal.push(this.slots[i].getFiguraMayor());
        }
    };
    Tragamoneda5.prototype.GanarPozo = function () {
        if (this.jugadaPozoTotal = this.ultimaJugada) {
            return true;
        }
        else {
            return false;
        }
    };
    Tragamoneda5.prototype.resetPremioPozo = function () {
        this.pozoTotal = 200;
    };
    Tragamoneda5.prototype.calcularPremio = function () {
        return this.apuesta * (this.slots[0].getposicion() + 1) * 10;
    };
    Tragamoneda5.prototype.probabilidadGanar = function () {
        /* probalidad de 1 en 20 */
        var probabilidad = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        if (probabilidad[Math.floor(Math.random() * probabilidad.length)] === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Tragamoneda5.prototype.jugar = function () {
        var control = 0;
        var jugadaGanadora = this.probabilidadGanar();
        while (control < 1) {
            this.setUltimaJugada();
            if (jugadaGanadora === this.SaberSiEsJugadaGanadora()) {
                control = 1;
            }
        }
        /*        this.setHistorialJugadas(); */
        if (this.SaberSiEsJugadaGanadora()) {
            if (this.GanarPozo()) {
                this.setPremio(this.getPozoTotal());
                this.IngresarDinero(this.getPremio());
                this.resetPremioPozo();
            }
            else {
                this.setPremio(this.calcularPremio());
                this.IngresarDinero(this.getPremio());
                this.incrementarPozoTotal();
            }
        }
        else {
            this.restarDineroIngresado();
        }
        console.log(this.getUltimaJugada());
        console.log("Premio: " + this.getPremio());
        console.log("Dinero: " + this.getDineroIngesado());
        this.setPremio(0);
    };
    return Tragamoneda5;
}(tragamonedas3_1.Tragamoneda3));
exports.Tragamoneda5 = Tragamoneda5;
