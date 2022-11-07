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
    JuegoCasino.prototype.leerArchivo = function (pArchivo) {
        var contenidoArchivo;
        try {
            contenidoArchivo = fs.readFileSync("./" + pArchivo, 'utf8');
        }
        catch (error) {
            fs.writeFileSync("./" + pArchivo, this.nombre, 'utf8');
            contenidoArchivo = fs.readFileSync("./" + pArchivo, 'utf8');
        }
        return contenidoArchivo;
    };
    JuegoCasino.prototype.guardarArchivo = function (pArchivo, pContenido) {
        fs.writeFileSync("./" + pArchivo, pContenido, 'utf8');
    };
    JuegoCasino.prototype.setDescripcion = function () {
        this.descripcion = this.leerArchivo(this.nombre + ".txt");
    };
    JuegoCasino.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    return JuegoCasino;
}());
exports.JuegoCasino = JuegoCasino;
