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
exports.JuegoDados = void 0;
var juegoCasino_1 = require("./juegoCasino");
var JuegoDados = /** @class */ (function (_super) {
    __extends(JuegoDados, _super);
    function JuegoDados(pNombre, pMano) {
        var _this = _super.call(this, pNombre) || this;
        _this.mano = pMano;
        _this.cantidadIntentos = 0;
        _this.setCantidadIntentos(2);
        _this.IntentosHechos = 1;
        _this.UltimoNumero = 0;
        _this.dineroIgresado = 0;
        _this.minimoApuesta = 0;
        _this.apuesta = 0;
        _this.premio = 0;
        return _this;
    }
    JuegoDados.prototype.getMano = function () {
        return this.mano;
    };
    JuegoDados.prototype.SetMano = function (pMano) {
        this.mano = pMano;
    };
    JuegoDados.prototype.getCantidadIntentos = function () {
        return this.cantidadIntentos;
    };
    JuegoDados.prototype.setCantidadIntentos = function (pCantidad) {
        this.cantidadIntentos = pCantidad;
    };
    JuegoDados.prototype.setUltimoNumero = function (pValorNumero) {
        this.UltimoNumero = pValorNumero;
    };
    JuegoDados.prototype.getIntentosHechos = function () {
        return this.IntentosHechos;
    };
    JuegoDados.prototype.setIntentosHechos = function () {
        this.IntentosHechos = this.IntentosHechos + 1;
    };
    JuegoDados.prototype.calcularPremio = function () {
        return this.apuesta * 2;
    };
    JuegoDados.prototype.getPremio = function () {
        return this.premio;
    };
    JuegoDados.prototype.setPremio = function (pCantidad) {
        this.premio = pCantidad;
    };
    JuegoDados.prototype.getApuesta = function () {
        return this.apuesta;
    };
    JuegoDados.prototype.controlarApuesta = function (pApuesta) {
        if (this.minimoApuesta > pApuesta) {
            return false;
        }
        else {
            return true;
        }
    };
    JuegoDados.prototype.setApuesta = function (pCantidad) {
        if (this.controlarApuesta(pCantidad) === true) {
            this.apuesta = pCantidad;
        }
        else {
            console.log("El minimo de Apuesta es: " + this.minimoApuesta);
        }
    };
    JuegoDados.prototype.restarDineroIngresado = function () {
        this.dineroIgresado = this.dineroIgresado - this.apuesta;
    };
    JuegoDados.prototype.ingresarDinero = function (pCantidad) {
        this.dineroIgresado = this.dineroIgresado + pCantidad;
    };
    JuegoDados.prototype.getDineroIngresado = function () {
        return this.dineroIgresado;
    };
    JuegoDados.prototype.getUltimoSuma = function () {
        return this.UltimoNumero;
    };
    JuegoDados.prototype.setUltimaSuma = function () {
        this.mano.tirarDados();
        this.UltimoNumero = this.mano.getUltimoResultado();
    };
    JuegoDados.prototype.setHistorialJugadas = function (pPremio) {
        var historial = this.leerArchivo(this.nombre + "-historial.txt");
        historial = historial + "\n";
        historial = historial + this.mano.getValorString() + ",";
        historial = historial + pPremio;
        this.guardarArchivo(this.nombre + "-historial.txt", historial);
    };
    JuegoDados.prototype.jugar = function () {
        var gano = 0;
        if (this.IntentosHechos <= this.cantidadIntentos && gano === 0) {
            console.log("intento: " + this.IntentosHechos + " de " + this.cantidadIntentos);
            this.setUltimaSuma();
            if (this.UltimoNumero === 7 || this.UltimoNumero === 11) {
                gano = 1;
            }
            this.setIntentosHechos();
        }
        if (gano = 1) {
            this.setPremio(this.calcularPremio());
            this.ingresarDinero(this.getPremio());
        }
        else {
            if (this.IntentosHechos === this.cantidadIntentos) {
                this.restarDineroIngresado();
            }
        }
        this.setHistorialJugadas(this.getPremio());
        if (this.IntentosHechos === this.cantidadIntentos || gano === 1) {
            console.log(this.mano.getValorString());
            console.log("Premio: " + this.getPremio());
            console.log("Dinero: " + this.getDineroIngresado());
            this.setPremio(0);
        }
    };
    return JuegoDados;
}(juegoCasino_1.JuegoCasino));
exports.JuegoDados = JuegoDados;
