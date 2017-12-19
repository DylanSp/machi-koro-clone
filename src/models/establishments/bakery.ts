import { Establishment } from "./establishment";
import { Player } from "../player";

export class Bakery extends Establishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [2, 3];
    }

    changeState (triggeringPlayer: Player): void {
        if (triggeringPlayer === this.owner) {
            if (this.owner.landmarkOwnership.get("Shopping Mall")) {
                this.owner.money += 2;
            } else {
                this.owner.money += 1;
            }
        }
    }
}