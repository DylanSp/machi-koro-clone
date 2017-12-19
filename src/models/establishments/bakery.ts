import { Establishment } from "./establishment";
import { Player } from "../player";

export class Bakery extends Establishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [2, 3];
    }

    changeState (triggeringPlayer: Player): void {
        if (triggeringPlayer === this.owner) {
            if (triggeringPlayer.landmarkOwnership.get("Shopping Mall")) {
                triggeringPlayer.money += 2;
            } else {
                triggeringPlayer.money += 1;
            }
        }
    }
}