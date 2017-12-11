import { Player } from "../player";

export abstract class Establishment {
    triggerNumbers: Array<number>;
    owner: Player;

    constructor (owner: Player) {
        this.triggerNumbers = new Array<number>();
        this.owner = owner;
    }

    public abstract changeState(triggeringPlayer: Player): void;

    public triggersOn(dieroll: number): boolean {
        return this.triggerNumbers.indexOf(dieroll) > -1;
    }
}