"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
class Dice {
    constructor() {
        this._value = 0;
    }
    lancer() {
        this._value = Math.floor(Math.random() * 100);
    }
    get value() {
        return this._value;
    }
}
exports.Dice = Dice;
