"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cup = void 0;
const dice_1 = require("./dice");
class Cup {
    constructor(nDice) {
        this.die = [];
        this._value = 0;
        let tempDice = new dice_1.Dice();
        for (let i = 0; i < nDice; i++) {
            this.die.push(tempDice);
        }
        console.log(this.die);
    }
    get value() {
        return this._value;
    }
    lancer() {
        let tempValue = 0;
        this.die.forEach(function (dice) {
            dice.lancer();
            // all die end up with same value as random uses clock
            // to generate number
            tempValue += dice.value;
        });
        this._value = tempValue;
    }
    afficher_score() {
        console.log(this.die);
        console.log(this.value);
    }
}
exports.Cup = Cup;
