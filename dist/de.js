"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.De = void 0;
class De {
    constructor() {
        this.value = 0;
    }
    lancer() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
    get_value() {
        return this.value;
    }
}
exports.De = De;
