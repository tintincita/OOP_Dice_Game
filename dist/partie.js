"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partie = void 0;
const gobelet_1 = require("./gobelet");
const joueur_1 = require("./joueur");
let rl = require('readline-sync');
class Partie {
    constructor(nb_tours, nb_des) {
        this.nb_tours = nb_tours;
        this.gobelet = new gobelet_1.Gobelet(nb_des);
        this.joueurs = [];
    }
    initialiser() {
        let nb_joueurs = (rl.questionInt("nombre de joueurs ? "));
        let names = [];
        let temp = "";
        for (let i = 0; i < nb_joueurs; i++) {
            temp = String(rl.question(" nom de joueur " + (i + 1) + " ? "));
            names.push(temp);
        }
        names.forEach((name) => {
            this.joueurs.push(new joueur_1.Joueur(name));
        });
        temp = rl.question("is " + this.nb_tours + " rounds OK? Y/N");
        if ((temp != "Y") && (temp != "y")) {
            this.nb_tours = rl.questionInt("How many rounds would you like? ");
        }
        temp = rl.question("is " + this.gobelet.des.length + " die OK? Y/N");
        if ((temp != "Y") && (temp != "y")) {
            let n = rl.questionInt("How many die would you like? ");
            this.gobelet = new gobelet_1.Gobelet(n);
        }
    }
    lancer() {
        for (let i = 0; i < this.nb_tours; i++) {
            this.joueurs.forEach((joueur) => {
                joueur.jouer(this.gobelet);
                joueur.afficherScore();
            });
            console.log("---");
        }
    }
    afficher_gagnant() {
        let temp = [0];
        this.joueurs.forEach((player) => { temp.push(player.score); });
        let tempN = Math.max(...temp);
        // console.log(tempN);
        let obj = this.joueurs.find(o => o.score === tempN);
        console.log(obj);
        console.log("c'est " + (obj === null || obj === void 0 ? void 0 : obj.nom) + " qui a gagne.");
    }
}
exports.Partie = Partie;
