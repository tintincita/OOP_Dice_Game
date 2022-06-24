export class De {
    // Valeur: un nombre représentant la valeur d'un lancer
    // de dé
    public value: number;


    constructor() {
        this.value = 0;
    }

    // lancer() : change la valeur du dé ->cette valeur doit 
    //être un nombre généré aléatoirement entre 1 et 6
    public lancer() {
        this.value = Math.floor(Math.random() * 6) + 1

    }

    // get_valeur() : renvoie la valeur du dé
    public get_value(): number {
        return this.value;
    }

}