import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";
let rl = require('readline-sync');


export class Partie {
    public joueurs: Joueur[];
    public nb_tours: number;
    public gobelet: Gobelet;

    constructor(nb_tours: number, nb_des: number) {
        this.nb_tours = nb_tours;
        this.gobelet = new Gobelet(nb_des);
        this.joueurs = [];
    }


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

    public lancer() {
        for (let i = 0; i < this.nb_tours; i++) {
            this.joueurs.forEach((joueur) => {
                joueur.jouer(this.gobelet);
                joueur.afficherScore();
            })
            console.log("---");

        }
    }

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