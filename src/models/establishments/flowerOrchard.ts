import { Establishment } from "./establishment";
import { Player } from "../player";

export class FlowerOrchard extends Establishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [4];
    }

    changeState (triggeringPlayer: Player): void {
        triggeringPlayer.money += 2;
    }
}