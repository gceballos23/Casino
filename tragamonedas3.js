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
exports.Tragamoneda3 = void 0;
var JuegoCasino_1 = require("./JuegoCasino");
var Tragamoneda3 = /** @class */ (function (_super) {
    __extends(Tragamoneda3, _super);
    function Tragamoneda3(pNOmbre, ptipoSlot, pCantidadSlot) {
        var _this = _super.call(this, pNOmbre) || this;
        _this.tipoSlot = ptipoSlot;
        _this.cantidadSlot = pCantidadSlot;
        _this.slots = [];
        _this.ultimaJugada = [];
        _this.dineroIngresado = 0;
        _this.apuestaMinima = 1;
        _this.apuesta = _this.apuestaMinima;
        _this.premio = 0;
        /* se carga la cantidad de slot */
        _this.cargarSlot();
        return _this;
    }
    Tragamoneda3.prototype.getCantidadSlot = function () {
        return this.cantidadSlot;
    };
    Tragamoneda3.prototype.cargarSlot = function () {
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.slots.push(this.tipoSlot);
            this.slots[i].girarSlots();
        }
    };
    Tragamoneda3.prototype.getUltimaJugada = function () {
        return this.ultimaJugada;
    };
    Tragamoneda3.prototype.setUltimaJugada = function () {
        this.ultimaJugada = [];
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.slots[i].girarSlots();
            this.ultimaJugada.push(this.slots[i].getUltimaJugadaSola());
        }
    };
    Tragamoneda3.prototype.getDineroIngesado = function () {
        return this.dineroIngresado;
    };
    Tragamoneda3.prototype.IngresarDinero = function (pCantidad) {
        this.dineroIngresado = this.dineroIngresado + pCantidad;
    };
    Tragamoneda3.prototype.restarDineroIngresado = function () {
        this.dineroIngresado = this.dineroIngresado - this.apuesta;
    };
    Tragamoneda3.prototype.setApuesta = function (pOpciones) {
        switch (pOpciones) {
            case 2:
                this.apuesta = 3;
                break;
            case 3:
                this.apuesta = 5;
                break;
            default:
                this.apuesta = 1;
        }
    };
    Tragamoneda3.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Tragamoneda3.prototype.probabilidadGanar = function () {
        /* probalidad de 1 en 5 */
        var probabilidad = [1, 1, 0, 1, 1];
        if (probabilidad[Math.floor(Math.random() * probabilidad.length)] === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Tragamoneda3.prototype.setHistorialJugadas = function (pPremio) {
        var historial = this.leerArchivo(this.nombre + "-historial.txt");
        historial = historial + "\n";
        historial = historial + this.getUltimaJugada() + ",";
        historial = historial + pPremio;
        this.GuardarArchivo(this.nombre + "-historial.txt", historial);
    };
    Tragamoneda3.prototype.SaberSiEsJugadaGanadora = function () {
        var ganadora = false;
        for (var i = 0; i < this.cantidadSlot - 1; i++) {
            if (this.ultimaJugada[i] === this.ultimaJugada[i + 1]) {
                ganadora = true;
            }
            else {
                ganadora = false;
                break;
            }
        }
        return ganadora;
    };
    Tragamoneda3.prototype.setPremio = function (pPremio) {
        this.premio = pPremio;
    };
    Tragamoneda3.prototype.getPremio = function () {
        return this.premio;
    };
    Tragamoneda3.prototype.calcularPremio = function () {
        return this.apuesta * (this.slots[0].getposicion() + 1) * 10;
    };
    Tragamoneda3.prototype.jugar = function () {
        var control = 0;
        var jugadaGanadora = this.probabilidadGanar();
        while (control < 1) {
            this.setUltimaJugada();
            if (jugadaGanadora === this.SaberSiEsJugadaGanadora()) {
                control = 1;
            }
        }
        if (this.SaberSiEsJugadaGanadora()) {
            this.setPremio(this.calcularPremio());
            this.IngresarDinero(this.getPremio());
        }
        else {
            this.restarDineroIngresado();
        }
        this.setHistorialJugadas(this.getPremio());
        console.log(this.getUltimaJugada());
        console.log("Premio: " + this.getPremio());
        console.log("Dinero: " + this.getDineroIngesado());
        this.setPremio(0);
    };
    return Tragamoneda3;
}(JuegoCasino_1.JuegoCasino));
exports.Tragamoneda3 = Tragamoneda3;
