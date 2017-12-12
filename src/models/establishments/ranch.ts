import { Establishment } from "./establishment";
import { Player } from "../player";

export class Ranch extends Establishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [2];
    }

    changeState (triggeringPlayer: Player): void {
        triggeringPlayer.money += 1;
    }
}