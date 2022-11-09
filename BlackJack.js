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
exports.BlackJack = void 0;
var juegoCasino_1 = require("./juegoCasino");
var ReadlineSync = require("readline-sync");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(pNombre, pMazoCarta, pCrupier, pJugadorBJ) {
        var _this = _super.call(this, pNombre) || this;
        _this.mazoCartas = pMazoCarta;
        _this.crupier = pCrupier;
        _this.jugadorBJ = pJugadorBJ;
        _this.dineroIngresado = 0;
        _this.premio = 0;
        _this.apuesta = 0;
        _this.minimoApuesta = 100;
        return _this;
    }
    BlackJack.prototype.calcularPremio = function () {
        return this.apuesta * 2;
    };
    BlackJack.prototype.getPremio = function () {
        return this.premio;
    };
    BlackJack.prototype.setPremio = function (pCantidad) {
        this.premio = pCantidad;
    };
    BlackJack.prototype.getApuesta = function () {
        return this.apuesta;
    };
    BlackJack.prototype.controlarApuesta = function (pApuesta) {
        if (this.minimoApuesta > pApuesta) {
            return false;
        }
        else {
            return true;
        }
    };
    BlackJack.prototype.setApuesta = function (pCantidad) {
        if (this.controlarApuesta(pCantidad) === true) {
            this.apuesta = pCantidad;
        }
        else {
            console.log("El minimo de Apuesta es: " + this.minimoApuesta);
        }
    };
    BlackJack.prototype.restarDineroIngresado = function () {
        this.dineroIngresado = this.dineroIngresado - this.apuesta;
    };
    BlackJack.prototype.ingresarDinero = function (pCantidad) {
        this.dineroIngresado = this.dineroIngresado + pCantidad;
    };
    BlackJack.prototype.getDineroIngresado = function () {
        return this.dineroIngresado;
    };
    /* METODO PARA VERIFICAR LA OPCION DE SEGUIR JUGANDO
SI INGRESA CUALQUIER OTRO VALOR QUE NO SEA 1 LO TOMARA COMO 0 */
    BlackJack.prototype.controlarOpcionNumerica = function (pOpcion) {
        switch (pOpcion) {
            case 1:
                return 1;
            default:
                return 0;
        }
    };
    /* METODO PARA VERIFICAR DINERO INGRESADO */
    BlackJack.prototype.controlarDineroIngresado = function (pCantidad) {
        if (isNaN(pCantidad) === false && pCantidad > 0) {
            return pCantidad;
        }
        else {
            return 0;
        }
    };
    BlackJack.prototype.menuSeguirJugando = function () {
        var input = ReadlineSync;
        var opcionSeguir = 0;
        var opcionDinero = 0;
        this.mazoCartas.mezclarCartas();
        opcionSeguir = this.controlarOpcionNumerica(Number(input.question("Ingrese 1 si quiere jugar al BlackJack: ")));
        if (opcionSeguir === 1) {
            opcionDinero = this.controlarDineroIngresado(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea: ")));
            if (opcionDinero > 0) {
                this.ingresarDinero(opcionDinero);
            }
            this.setApuesta(this.controlarDineroIngresado(Number(input.question("Ingrese el Dinero a Apostar: "))));
            if (this.getApuesta() === 0) {
                opcionSeguir = 0;
            }
        }
        return opcionSeguir;
    };
    BlackJack.prototype.repartirPrimeraMano = function () {
        for (var i = 0; i < 2; i++) {
            this.jugadorBJ.PedirCarta(this.mazoCartas.sacarCarta());
            this.crupier.PedirCarta(this.mazoCartas.sacarCarta());
        }
    };
    BlackJack.prototype.jugarBlackJack = function () {
        console.log(this.mazoCartas);
        //        this.mazoCartas.mezclarCartas();       
        while ((this.menuSeguirJugando() === 1) && (this.getDineroIngresado() > 0)) {
            if (this.getApuesta() <= this.getDineroIngresado()) {
                if (this.mazoCartas.cartasEnelMazo() > 10) {
                    console.log(this.mazoCartas.cartasEnelMazo());
                    this.jugar();
                }
            }
            else {
                console.log("Error en la Apuesta. Verificar si tiene dinero suficiente o si la Apuesta es Mayor o igual Apuesta Minima");
            }
        }
        console.log("Dinero a retirar: " + this.getDineroIngresado());
        this.jugadorBJ.setDinero(this.getDineroIngresado());
        this.ingresarDinero(-this.getDineroIngresado());
    };
    BlackJack.prototype.mostrarCartasJugadorBJ = function () {
        console.log("Cartas Crupier" + this.jugadorBJ.MostrarCartas());
    };
    BlackJack.prototype.mostrarCartasCrupier = function () {
        console.log("Cartas Crupier: " + this.crupier.MostrarCartas());
    };
    BlackJack.prototype.verificarGanaJugador = function () {
        if (this.jugadorBJ.getTotalMano() > 21) {
            return false;
        }
        else {
            if (this.jugadorBJ.getTotalMano() > this.crupier.getTotalMano()) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    BlackJack.prototype.jugar = function () {
        var input = ReadlineSync;
        var gana = false;
        // se reparten  las primeras  
        this.repartirPrimeraMano();
        //mostrar cartas
        this.mostrarCartasJugadorBJ();
        this.mostrarCartasCrupier();
        console.log(this.jugadorBJ.getTotalMano());
        console.log(this.crupier.getTotalMano());
        //juego del jugador
        while (this.jugadorBJ.getTotalMano() <= 21) {
            if (this.jugadorBJ.quedarse(input.question("SE PLANTA??  si/no ")) === false) {
                this.jugadorBJ.PedirCarta(this.mazoCartas.sacarCarta());
                this.mostrarCartasJugadorBJ();
            }
            else {
                break;
            }
        }
        //juego del crupier
        while (this.crupier.getTotalMano() <= 21) {
            if (this.crupier.quedarse() === false) {
                this.crupier.PedirCarta(this.mazoCartas.sacarCarta());
                this.mostrarCartasCrupier();
            }
            else {
                break;
            }
        }
        //verificar si gano jugador y realizar los pagos
        if (this.verificarGanaJugador() === true) {
            this.setPremio(this.calcularPremio());
            this.ingresarDinero(this.getPremio());
        }
        else {
            this.restarDineroIngresado();
        }
        console.log("Premio: " + this.getPremio());
        console.log("Dinero: " + this.getDineroIngresado());
        this.setPremio(0);
        this.jugadorBJ.resetMano();
        this.crupier.resetMano();
    };
    return BlackJack;
}(juegoCasino_1.JuegoCasino));
exports.BlackJack = BlackJack;
