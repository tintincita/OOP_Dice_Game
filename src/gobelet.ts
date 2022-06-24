import { De } from "./de";

export class Gobelet {
    public value: number;
    public des: De[] = [];

    constructor(nb_des: number) {
        this.value = 0

        for (let i = 0; i < nb_des; i++) {
            this.des[i] = (new De());
        }
    }

    public get_value(): number {
        return this.value;
    }

    public lancer() {
        this.value = 0;
        this.des.forEach((dice) => {
            dice.lancer()
            this.value += dice.value;
        })

    }

    public async afficher_score() {
        console.log(this.des)
        console.log(this.value)
    }
}