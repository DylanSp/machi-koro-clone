import { Player } from "../../models/player";
import { WheatField } from "../../models/establishments/wheatField";
import { Bakery } from "../../models/establishments/bakery";

describe("Player creation", () => {
    let player: Player;

    beforeEach(() => {
        player = Player.createNewPlayer();
    });

    it("should give a player 3 coins", () => {
        expect(player.money).toBe(3);
    });

    it("should give a player a Wheat Field and a Bakery", () => {
        expect(player.establishments).toHaveLength(2);
        expect(player.establishments[0]).toBeInstanceOf(WheatField);
        expect(player.establishments[1]).toBeInstanceOf(Bakery);
    });
});