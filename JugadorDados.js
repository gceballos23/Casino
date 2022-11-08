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
exports.JugadorDados = void 0;
var jugador_1 = require("./jugador");
var ReadlineSync = require("readline-sync");
var JugadorDados = /** @class */ (function (_super) {
    __extends(JugadorDados, _super);
    function JugadorDados(pNombre, pdados, pDinero) {
        var _this = _super.call(this, pNombre, pDinero) || this;
        _this.dados = pdados;
        return _this;
    }
    JugadorDados.prototype.getDados = function () {
        return this.dados;
    };
    JugadorDados.prototype.setDados = function (pDados) {
        this.dados = pDados;
    };
    /* METODO PARA VERIFICAR LA OPCION DE SEGUIR JUGANDO
        SI INGRESA CUALQUIER OTRO VALOR QUE NO SEA 1 LO TOMARA COMO 0 */
    JugadorDados.prototype.controlarOpcionNumerica = function (pOpcion) {
        switch (pOpcion) {
            case 1:
                return 1;
            default:
                return 0;
        }
    };
    /* METODO PARA VERIFICAR DINERO INGRESADO */
    JugadorDados.prototype.controlarDineroIngresado = function (pCantidad) {
        if (isNaN(pCantidad) === false && pCantidad > 0) {
            return pCantidad;
        }
        else {
            return 0;
        }
    };
    /* METODO PARA SIMULAR UN MENU CON LAS OPCIONES :
        - SEGUIR JUGANDO
        - INGRESO NUEVO DE DINERO
        - CAMBIAR LA APUESTA*/
    JugadorDados.prototype.menuSeguirJugando = function () {
        var input = ReadlineSync;
        var opcionSeguir = 0;
        opcionSeguir = this.controlarOpcionNumerica(Number(input.question("Ingrese 1 si quiere jugar a los DADOS: ")));
        if (opcionSeguir === 1) {
            this.dados.ingresarDinero(this.controlarDineroIngresado(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea: "))));
            this.dados.setApuesta(this.controlarDineroIngresado(Number(input.question("Ingrese el Dinero a Apostar: "))));
        }
        return opcionSeguir;
    };
    /* METODO PARA JUGAR AL TRAGAMONEDAS*/
    JugadorDados.prototype.jugarDados = function () {
        while ((this.menuSeguirJugando() === 1) && (this.dados.getDineroIngresado() > 0)) {
            if (this.dados.getApuesta() <= this.dados.getDineroIngresado()) {
                this.dados.jugar();
            }
            else {
                console.log("La apuesta es mayor a dinero que tiene!!");
            }
        }
        console.log("Dinero a retirar: " + this.dados.getDineroIngresado());
        this.setDinero(this.dados.getDineroIngresado());
        this.dados.ingresarDinero(-this.dados.getDineroIngresado());
    };
    return JugadorDados;
}(jugador_1.Jugador));
exports.JugadorDados = JugadorDados;
