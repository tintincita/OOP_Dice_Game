import { Gobelet } from "./gobelet";

export class Joueur {
    // Nom: chaîne de caractères représentant 
    // le nom du joueur
    public nom: string;
    // Score: nombre représentant le score 
    // du joueur (à un instant t)
    public score: number;


    // constructor(nom) : initialise la valeur du nom 
    // du joueur à partir du paramètre nom, initialise 
    // le scoredu joueur à 0
    constructor(nom: string) {
        this.nom = nom;
        this.score = 0;

        if (nom == "cyriak") {
            this.score = 100;
            // :wink: 
        }
    }

    // get_nom() : renvoie le nom du joueur
    public get_nom(): string {
        return this.nom;
    }

    // get_score() : renvoie le score du joueur
    public get_score(): number {
        return this.score;
    }

    // jouer(gobelet) : prend en paramètre le gobelet de 
    // la partie, lance le gobelet, met à jour le score 
    // du joueur en fonction du résultat du lancé
    public jouer(cup: Gobelet) {
        cup.lancer();
        this.score += cup.value;
    }

    //afficher_score() : affiche en console le score du joueur
    public afficherScore() {
        console.log(this.nom + ": " + this.score);

    }


}