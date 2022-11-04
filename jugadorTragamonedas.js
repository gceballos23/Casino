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
exports.JugadorTragamonedas = void 0;
var jugador_1 = require("./jugador");
var ReadlineSync = require("readline-sync");
var JugadorTragamonedas = /** @class */ (function (_super) {
    __extends(JugadorTragamonedas, _super);
    function JugadorTragamonedas(pNombre, pMaquina, pDinero) {
        var _this = _super.call(this, pNombre, pDinero) || this;
        _this.maquina = pMaquina;
        return _this;
    }
    JugadorTragamonedas.prototype.getMaquina = function () {
        return this.maquina;
    };
    JugadorTragamonedas.prototype.setMaquina = function (pMaquina) {
        this.maquina = pMaquina;
    };
    JugadorTragamonedas.prototype.controlarOpcionNumerica = function (pOpcion) {
        switch (pOpcion) {
            case 1:
                return 1;
            default:
                return 0;
        }
    };
    JugadorTragamonedas.prototype.menuSeguirJugando = function () {
        var input = ReadlineSync;
        var opcionSeguir = 0;
        var opcionDinero = 0;
        opcionSeguir = this.controlarOpcionNumerica(Number(input.question("Ingrese 1 si quiere jugar Al Tragamonedas: ")));
        if (opcionSeguir === 1) {
            opcionDinero = Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea: "));
            if (isNaN(opcionDinero) === false) {
                this.maquina.IngresarDinero(opcionDinero);
            }
            else {
                this.maquina.IngresarDinero(0);
            }
            this.maquina.setApuesta(Number(input.question("APUESTA 1: 1 - FICHA APUESTA 2: 3 FICHAS - APUESTA3: 5 FICHAS: ")));
        }
        return opcionSeguir;
    };
    JugadorTragamonedas.prototype.jugarTragamoneda = function () {
        while ((this.menuSeguirJugando() === 1) && (this.maquina.getDineroIngesado() > 0)) {
            if (this.maquina.getApuesta() <= this.maquina.getDineroIngesado()) {
                this.maquina.jugar();
            }
            else {
                console.log("La apuesta es mayor a dinero que tiene!!");
            }
        }
        console.log("Dinero a retirar: " + this.maquina.getDineroIngesado());
        this.setDinero(this.maquina.getDineroIngesado());
        this.maquina.IngresarDinero(-this.maquina.getDineroIngesado());
    };
    return JugadorTragamonedas;
}(jugador_1.Jugador));
exports.JugadorTragamonedas = JugadorTragamonedas;
