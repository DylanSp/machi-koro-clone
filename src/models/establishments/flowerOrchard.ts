import { Establishment } from "./establishment";
import { Player } from "../player";
import { UniversalEstablishment } from "./universalEstablishment";

export class FlowerOrchard extends UniversalEstablishment {
    constructor (owner: Player) {
        super(owner);
        this.triggerNumbers = [4];
        this.rewardAmount = 2;
    }
}