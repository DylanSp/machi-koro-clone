import { Establishment } from "./establishment";
import { Player } from "../player";

// these are what Machi Koro calls Primary Industry;
// establishments that trigger on anyone's roll
export abstract class UniversalEstablishment extends Establishment {
    rewardAmount: number;

    constructor(owner: Player) {
        super(owner);
    }

    public changeState (triggeringPlayer: Player): void {
        this.owner.money += this.rewardAmount;
    }
}