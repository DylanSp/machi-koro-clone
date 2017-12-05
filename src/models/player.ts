import { Establishment } from "./establishments/establishment";
import { WheatField } from "./establishments/wheatField";
import { Bakery } from "./establishments/bakery";

export class Player {
    public money: number;
    public establishments: Array<Establishment>;

    constructor () {
        this.money = 0;
        this.establishments = [new WheatField(), new Bakery()];
    }
}