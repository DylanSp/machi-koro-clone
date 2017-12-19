import { Establishment } from "./establishments/establishment";
import { WheatField } from "./establishments/wheatField";
import { Bakery } from "./establishments/bakery";
import { Landmark } from "./landmark";

export class Player {
    public money: number;
    public establishments: Array<Establishment>;
    public landmarkOwnership: Map<Landmark, boolean>;

    constructor () {
        this.money = 0;
        this.establishments = new Array<Establishment>();
        this.landmarkOwnership = new Map<Landmark, boolean>();
        this.landmarkOwnership.set("Harbor", false);
        this.landmarkOwnership.set("Train Station", false);
        this.landmarkOwnership.set("Shopping Mall", false);
        this.landmarkOwnership.set("Amusement Park", false);
        this.landmarkOwnership.set("Moon Tower", false);
        this.landmarkOwnership.set("Airport", false);
    }

    public static createNewPlayer (): Player {
        const player: Player = new Player();
        player.money = 3;
        player.establishments = [new WheatField(player), new Bakery(player)];
        return player;
    }

    public hasWon (): boolean {
        // check if every value in landmarkOwnership is true
        return [...this.landmarkOwnership.values()].every(val => val);
    }
}