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
exports.JugadorCrupier = void 0;
var jugadorBlackJack_1 = require("./jugadorBlackJack");
var JugadorCrupier = /** @class */ (function (_super) {
    __extends(JugadorCrupier, _super);
    function JugadorCrupier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JugadorCrupier.prototype.quedarse = function () {
        if (this.getTotalMano() >= 16 && this.getTotalMano() <= 21) {
            return true;
        }
        else {
            return false;
        }
    };
    return JugadorCrupier;
}(jugadorBlackJack_1.JugadorBlackJack));
exports.JugadorCrupier = JugadorCrupier;
