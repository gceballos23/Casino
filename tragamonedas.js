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
exports.Tragamoneda = void 0;
var JuegoCasino_1 = require("./JuegoCasino");
var Tragamoneda = /** @class */ (function (_super) {
    __extends(Tragamoneda, _super);
    function Tragamoneda(pNOmbre, ptipoSlot, pCantidadSlot) {
        var _this = _super.call(this, pNOmbre) || this;
        _this.tipoSlot = ptipoSlot;
        _this.cantidadSlot = pCantidadSlot;
        _this.slots = [];
        _this.ultimaJugada = [];
        _this.dineroIngresado = 0;
        //    this.pozoTotal= pPozoTotal;
        //    this.jugadaPozoTotal = [];
        /* this.setJugadaPozoTotal(); */
        _this.apuestaMinima = 1;
        _this.apuesta = _this.apuestaMinima;
        _this.premio = 0;
        /* se carga la cantidad de slot */ 0;
        _this.cargarSlot();
        return _this;
    }
    Tragamoneda.prototype.getCantidadSlot = function () {
        return this.cantidadSlot;
    };
    Tragamoneda.prototype.cargarSlot = function () {
        for (var i = 0; i < this.cantidadSlot; i++) {
            this.slots.push(this.tipoSlot);
            this.slots[i].girarSlots();
        }
        //        this.setJugadaPozoTotal();
    };
    Tragamoneda.prototype.getUltimaJugada = function () {
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
    /*  public getPozoTotal(): number{
          return this.pozoTotal;
      }
  
      protected incrementarPozoTotal():void{
          this.pozoTotal = this.pozoTotal + this.apuesta;
      }*/
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
        /* let probabilidad : number[]=[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1]*/
        var probabilidad = [1, 1, 0, 1, 1];
        if (probabilidad[Math.floor(Math.random() * probabilidad.length)] === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    /*
        public getHistorialJugada():string[]{
            return  this.historialJugadas;
        }
    
        protected setHistorialJugadas():void{
            for( let i:number = 0; i< this.cantidadSlot ; i++){
                this.historialJugadas.push(this.slots[i].getUltimaJugadaSola());
            }
        }
    
        protected getJugadaPozoTotal():string[]{
            return this.jugadaPozoTotal
        }
    
        protected setJugadaPozoTotal():void{
            for( let i:number = 0; i< this.cantidadSlot  ; i++){
                this.jugadaPozoTotal.push(this.slots[i].getFiguraMayor());
            }
        }
    
        protected GanarPozo():boolean{
            if (this.jugadaPozoTotal = this.ultimaJugada) {
                return true;
            }else{
                return false;
            }
        }
    */
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
    /*
        protected resetPremioPozo():void{
            this.pozoTotal = 100;
        }
    */
    Tragamoneda.prototype.calcularPremio = function () {
        return this.apuesta * (this.slots[0].getposicion() + 1) * 10;
    };
    Tragamoneda.prototype.jugar = function () {
        var control = 0;
        while (control < 1) {
            this.setUltimaJugada();
            if (this.probabilidadGanar() === this.SaberSiEsJugadaGanadora()) {
                control = 1;
            }
        }
        //        this.setHistorialJugadas();
        /*        if (this.SaberSiEsJugadaGanadora()){
                    if (this.GanarPozo()){
                        this.setPremio(this.getPozoTotal())
                        this.IngresarDinero(this.getPremio());
                        this.resetPremioPozo();
        
                    }else{
                        this.setPremio(this.calcularPremio())
                        this.IngresarDinero(this.getPremio());
                        this.incrementarPozoTotal();
                    }
                } else {
                    this.restarDineroIngresado();
                }
        */
        if (this.SaberSiEsJugadaGanadora()) {
            this.setPremio(this.calcularPremio());
            this.IngresarDinero(this.getPremio());
        }
        else {
            this.restarDineroIngresado();
        }
    };
    return Tragamoneda;
}(JuegoCasino_1.JuegoCasino));
exports.Tragamoneda = Tragamoneda;
