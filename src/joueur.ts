import { Gobelet } from "./gobelet";

export class Joueur {
    public nom: string;
    public score: number;

    constructor(nom: string) {
        this.nom = nom;
        this.score = 0;

        if (nom == "cyriak") {
            this.score = 100;
            // :wink:
        }
    }

    public jouer(cup: Gobelet) {
        cup.lancer();
        this.score += cup.value;
    }

    public afficherScore() {
        console.log(this.nom + ": " + this.score);

    }



    public get_score(): number {
        return this.score;
    }

    public get_nom(): string {
        return this.nom;
    }

}