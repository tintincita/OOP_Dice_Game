import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";
let rl = require('readline-sync');


export class Partie {
    // joueurs : tableau de joueurs
    public joueurs: Joueur[];
    // nb_tours : entier représentant le nombre de tours à jouer
    public nb_tours: number;
    // gobelet : gobelet de dés
    public gobelet: Gobelet;

    // constructor(nb_tours, nb_des) : crée l'objet Partie en 
    // récupérant le nombre de tours et nombre de dés
    constructor(nb_tours: number, nb_des: number) {
        this.nb_tours = nb_tours;
        this.gobelet = new Gobelet(nb_des);
        this.joueurs = [];
    }


    // initialiser() : permet d'inscrire des joueurs dans la partie
    public initialiser() {
        let nb_joueurs = (rl.questionInt("nombre de joueurs ? "));
        let names: string[] = [];
        let temp = "";

        for (let i = 0; i < nb_joueurs; i++) {
            temp = String(rl.question(" nom de joueur " + (i + 1) + " ? "));
            names.push(temp);
        }

        names.forEach((name) => {
            this.joueurs.push(new Joueur(name))
        })


        temp = rl.question("is " + this.nb_tours + " rounds OK? Y/N")
        if ((temp != "Y") && (temp != "y")) {
            this.nb_tours = rl.questionInt("How many rounds would you like? ");
        }

        temp = rl.question("is " + this.gobelet.des.length + " die OK? Y/N")
        if ((temp != "Y") && (temp != "y")) {
            let n = rl.questionInt("How many die would you like? ");
            this.gobelet = new Gobelet(n);
        }
    }

    // lancer() : lance la partie : chaque joueur joue à tour 
    // de rôle pendant les n tours. Une fois lapartieterminée,
    // affiche le gagnant.
    public lancer() {
        for (let i = 0; i < this.nb_tours; i++) {
            this.joueurs.forEach((joueur) => {
                joueur.jouer(this.gobelet);
                joueur.afficherScore();
            })
            console.log("---");

        }
    }

    // afficher_gagnant() : compare les scores des joueurs et 
    // affiche le gagnant.
    public afficher_gagnant() {
        let temp = [0];
        this.joueurs.forEach((player) => { temp.push(player.score) });
        let tempN = Math.max(...temp);
        // console.log(tempN);

        let obj = this.joueurs.find(o => o.score === tempN);
        console.log(obj);

        console.log("c'est " + obj?.nom + " qui a gagne.");

    }


}