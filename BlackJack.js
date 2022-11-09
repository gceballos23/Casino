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
    // GUARDA LA JUGADA EN EL HISTORIAL DEL JUEGO
    BlackJack.prototype.setHistorialJugadas = function (pPremio) {
        var historial = this.leerArchivo(this.nombre + "-historial.txt");
        historial = historial + "\n";
        historial = historial + this.crupier.getTotalMano() + ",";
        historial = historial + this.jugadorBJ.getTotalMano() + ",";
        historial = historial + pPremio;
        this.guardarArchivo(this.nombre + "-historial.txt", historial);
    };
    //SIMULAR UN MENU DONDE SE AGREGAN
    //JUGAR - DINERO INGRESADO - APUESTA
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
    // REPARTE LAS PRIMERAS DOS CARTAS EN EL JUEGO
    BlackJack.prototype.repartirPrimeraMano = function () {
        for (var i = 0; i < 2; i++) {
            this.jugadorBJ.PedirCarta(this.mazoCartas.sacarCarta());
            this.crupier.PedirCarta(this.mazoCartas.sacarCarta());
        }
    };
    BlackJack.prototype.jugarBlackJack = function () {
        this.mazoCartas.mezclarCartas();
        // ingreso de los datos 
        // SEGUIR JUGANDO
        // INGRESAR MAS DINERO
        // INGRESAR LA APUESTA       
        while ((this.menuSeguirJugando() === 1) && (this.getDineroIngresado() > 0)) {
            if (this.getApuesta() <= this.getDineroIngresado() && this.getApuesta() > 0) {
                //JUGAR SI HAY CARTAS 
                if (this.mazoCartas.cartasEnelMazo() > 10) {
                    this.jugar();
                }
            }
            else {
                console.log("Error en la Apuesta. Verificar si tiene dinero suficiente o si la Apuesta es Mayor o igual Apuesta Minima");
                break;
            }
        }
        console.log("Dinero a retirar: " + this.getDineroIngresado());
        this.jugadorBJ.setDinero(this.getDineroIngresado());
        this.ingresarDinero(-this.getDineroIngresado());
    };
    BlackJack.prototype.mostrarCartasJugadorBJ = function () {
        console.log("Cartas jugador BlackJack" + this.jugadorBJ.MostrarCartas());
    };
    BlackJack.prototype.mostrarCartasCrupier = function () {
        console.log("Cartas Crupier: " + this.crupier.MostrarCartas());
    };
    BlackJack.prototype.verificarGanaJugador = function () {
        var ganador = false;
        //verificar si es mayor a 21 la mano del jugador 
        if (this.jugadorBJ.getTotalMano() > 21) {
            ganador = false;
        }
        // Verificar si el crupier se pasa  y el jugador no
        if (this.crupier.getTotalMano() > 21 && this.jugadorBJ.getTotalMano() <= 21) {
            ganador = true;
        }
        // verificar si la mano del jugador es mayor que la del crupier
        if (this.crupier.getTotalMano() <= 21 && this.jugadorBJ.getTotalMano() <= 21) {
            if (this.jugadorBJ.getTotalMano() > this.crupier.getTotalMano()) {
                ganador = true;
            }
            else {
                ganador = false;
            }
        }
        return ganador;
    };
    BlackJack.prototype.jugar = function () {
        var input = ReadlineSync;
        var gana = false;
        // se reparten  las primeras  
        this.repartirPrimeraMano();
        //mostrar cartas
        this.mostrarCartasJugadorBJ();
        this.mostrarCartasCrupier();
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
        if (this.jugadorBJ.getTotalMano() <= 21) {
            while (this.crupier.getTotalMano() <= 21) {
                if (this.crupier.quedarse() === false) {
                    input.question("PRESIONE UNA TECLA PARA SIGUIENTE CARTA DEL CRUPIER");
                    this.crupier.PedirCarta(this.mazoCartas.sacarCarta());
                    this.mostrarCartasCrupier();
                }
                else {
                    break;
                }
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
        //guardar historial de jugadas
        this.setHistorialJugadas(this.getPremio());
        //mostrar premios    
        console.log("Premio: " + this.getPremio());
        console.log("Dinero: " + this.getDineroIngresado());
        //resetear Juego
        this.setPremio(0);
        this.jugadorBJ.resetMano();
        this.crupier.resetMano();
    };
    return BlackJack;
}(juegoCasino_1.JuegoCasino));
exports.BlackJack = BlackJack;
