"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
class Joueur {
    constructor(nom) {
        this.nom = nom;
        this.score = 0;
        if (nom == "cyriak") {
            this.score = 100;
            // :wink:
        }
    }
    jouer(cup) {
        cup.lancer();
        this.score += cup.value;
    }
    afficherScore() {
        console.log(this.nom + ": " + this.score);
    }
    get_score() {
        return this.score;
    }
    get_nom() {
        return this.nom;
    }
}
exports.Joueur = Joueur;
