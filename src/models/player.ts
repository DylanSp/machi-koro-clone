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
    }

    public static createNewPlayer (): Player {
        const player: Player = new Player();
        player.money = 3;
        player.establishments = [new WheatField(player), new Bakery(player)];
        player.landmarkOwnership.set("Harbor", false);
        player.landmarkOwnership.set("Train Station", false);
        player.landmarkOwnership.set("Shopping Mall", false);
        player.landmarkOwnership.set("Amusement Park", false);
        player.landmarkOwnership.set("Moon Tower", false);
        player.landmarkOwnership.set("Airport", false);
        return player;
    }

    public hasWon (): boolean {
        // check if every value in landmarkOwnership is true
        return [...this.landmarkOwnership.values()].every(val => val);
    }
}