"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
class Joueur {
    constructor(nom) {
        this._nom = nom;
        this._score = 0;
        if (nom == "cyriak") {
            this.score = 100;
            // :wink:
        }
    }
    jouer(cup) {
        cup.lancer();
        this._score += cup.value;
    }
    afficherScore() {
        console.log(this._score);
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
}
exports.Joueur = Joueur;
