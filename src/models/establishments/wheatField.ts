import { Establishment } from "./establishment";
import { Player } from "../player";

export class WheatField extends Establishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [1];
    }

    changeState (triggeringPlayer: Player): void {
        triggeringPlayer.money += 1;
    }
}