"use strict";
exports.__esModule = true;
exports.Tragamoneda = void 0;
var Tragamoneda = /** @class */ (function () {
    function Tragamoneda(ptipoSlot, pCantidadSlot, pPozoTotal) {
        this.tipoSlot = ptipoSlot;
        this.cantidadSlot = pCantidadSlot;
        /* se carga la cantidad de slot */
        /* this.cargarSlot(); */
        this.slots = [];
        this.ultimaJugada = [];
        this.historialJugadas = [];
        this.dineroIngresado = 0;
        this.pozoTotal = pPozoTotal;
        /* this.setJugadaPozoTotal(); */
        this.jugadaPozoTotal = [];
        this.apuestaMinima = 1;
        this.apuesta = this.apuestaMinima;
        this.premio = 0;
    }
    Tragamoneda.prototype.getCantidadSlot = function () {
        return this.cantidadSlot;
    };
    Tragamoneda.prototype.cargarSlot = function () {
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.slots.push(this.tipoSlot);
            this.slots[i].girarSlots();
        }
        this.setJugadaPozoTotal();
    };
    Tragamoneda.prototype.UltimaJugada = function () {
        return this.ultimaJugada;
    };
    Tragamoneda.prototype.setUltimaJugada = function () {
        this.ultimaJugada = [];
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.slots[i].girarSlots();
            this.ultimaJugada.push(this.slots[i].getUltimaJugadaSola());
        }
    };
    Tragamoneda.prototype.getDineroIngesado = function () {
        return this.dineroIngresado;
    };
    Tragamoneda.prototype.IngresarDinero = function (pCantidad) {
        this.dineroIngresado = this.dineroIngresado + pCantidad;
    };
    Tragamoneda.prototype.restarDineroIngresado = function () {
        this.dineroIngresado = this.dineroIngresado - this.apuesta;
    };
    Tragamoneda.prototype.getPozoTotal = function () {
        return this.pozoTotal;
    };
    Tragamoneda.prototype.incrementarPozoTotal = function () {
        this.pozoTotal = this.pozoTotal + this.apuesta;
    };
    Tragamoneda.prototype.setApuesta = function (pOpciones) {
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
    Tragamoneda.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Tragamoneda.prototype.probabilidadGanar = function () {
        /* probalidad de 1 en 20 */
        var probabilidad = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1];
        if (probabilidad[Math.floor(Math.random() * probabilidad.length)] === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Tragamoneda.prototype.getHistorialJugada = function () {
        return this.historialJugadas;
    };
    Tragamoneda.prototype.setHistorialJugadas = function () {
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.historialJugadas.push(this.slots[i].getUltimaJugadaSola());
        }
    };
    Tragamoneda.prototype.getJugadaPozoTotal = function () {
        return this.jugadaPozoTotal;
    };
    Tragamoneda.prototype.setJugadaPozoTotal = function () {
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.jugadaPozoTotal.push(this.slots[i].getFiguraMayor());
        }
    };
    Tragamoneda.prototype.GanarPozo = function () {
        if (this.jugadaPozoTotal = this.ultimaJugada) {
            return true;
        }
        else {
            return false;
        }
    };
    Tragamoneda.prototype.SaberSiEsJugadaGanadora = function () {
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
    Tragamoneda.prototype.setPremio = function (pPremio) {
        this.premio = pPremio;
    };
    Tragamoneda.prototype.getPremio = function () {
        return this.premio;
    };
    Tragamoneda.prototype.resetPremioPozo = function () {
        this.pozoTotal = 100;
    };
    Tragamoneda.prototype.calcularPremio = function () {
        return this.apuesta * (this.slots[0].getposicion() + 1) * 10;
    };
    Tragamoneda.prototype.TirarPalanca = function () {
        var control = 0;
        while (control < 1) {
            this.setUltimaJugada();
            if (this.probabilidadGanar() === this.SaberSiEsJugadaGanadora()) {
                control = 1;
            }
        }
        this.setHistorialJugadas();
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
    };
    return Tragamoneda;
}());
exports.Tragamoneda = Tragamoneda;
