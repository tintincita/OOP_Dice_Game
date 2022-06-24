export class De {
    public value: number;


    constructor() {
        this.value = 0;
    }

    public lancer() {
        this.value = Math.floor(Math.random() * 6) + 1

    }

    public get_value(): number {
        return this.value;
    }

}