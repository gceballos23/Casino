"use strict";
exports.__esModule = true;
exports.JuegoCasino = void 0;
var fs = require("fs");
var JuegoCasino = /** @class */ (function () {
    function JuegoCasino(pNombre) {
        this.nombre = pNombre;
        this.descripcion = "";
        this.setDescripcion();
    }
    JuegoCasino.prototype.getNombre = function () {
        return this.nombre;
    };
    JuegoCasino.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    JuegoCasino.prototype.leerArchivo = function () {
        var contenidoArchivo;
        try {
            contenidoArchivo = fs.readFileSync("./" + this.nombre + ".txt", 'utf8');
        }
        catch (error) {
            fs.writeFileSync("./" + this.nombre + ".txt", this.nombre, 'utf8');
            contenidoArchivo = fs.readFileSync("./" + this.nombre + ".txt", 'utf8');
        }
        return contenidoArchivo;
    };
    JuegoCasino.prototype.setDescripcion = function () {
        this.descripcion = this.leerArchivo();
    };
    JuegoCasino.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    return JuegoCasino;
}());
exports.JuegoCasino = JuegoCasino;
