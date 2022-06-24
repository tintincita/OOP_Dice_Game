import { De } from "./de";

export class Gobelet {
    // Valeur: nombre représentant la valeur d'un lancer
    // du gobelet
    public value: number;

    // Des: tableau de dés qui contient un certain 
    // nombre de dés
    public des: De[] = [];

    // constructor(nb_des) : initialise la valeur du gobelet 
    // à 0, génère le nombre de dés nécessaires à lapartie et 
    // les ajoute au tableau des
    constructor(nb_des: number) {
        this.value = 0

        for (let i = 0; i < nb_des; i++) {
            this.des[i] = (new De());
        }
    }

    // get_valeur() : renvoie la valeur du gobelet
    public get_value(): number {
        return this.value;
    }

    // lancer() : change la valeur des dés du gobelet
    // ; met à jour la valeur du gobelet
    public lancer() {
        this.value = 0;
        this.des.forEach((dice) => {
            dice.lancer()
            this.value += dice.value;
        })

    }

    // afficher_score() :affiche en console 
    // le score du dernier lancé de gobelet
    public async afficher_score() {
        console.log(this.des)
        console.log(this.value)
    }
}