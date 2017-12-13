import { Establishment } from "./establishment";
import { Player } from "../player";
import { UniversalEstablishment } from "./universalEstablishment";

export class WheatField extends UniversalEstablishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [1];
        this.rewardAmount = 1;
    }
}