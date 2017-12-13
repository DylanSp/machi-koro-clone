import { Establishment } from "./establishment";
import { Player } from "../player";
import { UniversalEstablishment } from "./universalEstablishment";

export class Ranch extends UniversalEstablishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [2];
        this.rewardAmount = 1;
    }
}