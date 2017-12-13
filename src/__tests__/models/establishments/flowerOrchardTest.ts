import { GameState } from "../../../models/gameState";
import { FlowerOrchard } from "../../../models/establishments/flowerOrchard";
import { Player } from "../../../models/player";

describe("Flower Orchard", () => {
    describe("When owning player rolls", () => {
        let state: GameState;
        let player: Player;

        beforeEach(() => {
            state = new GameState(1);
            player = state.players[0];
            player.establishments.push(new FlowerOrchard(player));
        });

        it("should give two coins on a roll of 4", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 4);
            expect(player.money).toBe(2);
        });

        it("should give zero coins on a roll of 1", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 1);
            expect(player.money).toBe(0);
        });
    });

    describe("When another player rolls", () => {
        let state: GameState;
        let triggeringPlayer: Player;
        let owningPlayer: Player;

        beforeEach(() => {
            state = new GameState(2);
            triggeringPlayer = state.players[0];
            owningPlayer = state.players[1];
            owningPlayer.establishments.push(new FlowerOrchard(owningPlayer));
        });

        it("should give two coins on a roll of 4", () => {
            expect(owningPlayer.money).toBe(0);
            state.triggerEffects(triggeringPlayer, 4);
            expect(owningPlayer.money).toBe(2);
        });

        it("should give zero coins on a roll of 1", () => {
            expect(owningPlayer.money).toBe(0);
            state.triggerEffects(triggeringPlayer, 1);
            expect(owningPlayer.money).toBe(0);
        });
    });
});