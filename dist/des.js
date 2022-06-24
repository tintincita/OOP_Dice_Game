"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Des = void 0;
class Des {
    constructor() {
        this._value = 0;
    }
    lancer() {
        this._value = Math.floor(Math.random() * 6);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.Des = Des;
