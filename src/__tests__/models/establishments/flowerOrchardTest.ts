import { GameState } from "../../../models/gameState";
import { FlowerOrchard } from "../../../models/establishments/flowerOrchard";

describe("Flower Orchard", () => {
    it("should give two coins on a roll of 4", () => {
        const state: GameState = new GameState(1);
        const player = state.players[0];
        player.establishments.push(new FlowerOrchard(player));
        expect(player.money).toBe(0);
        state.triggerEffects(4);
        expect(player.money).toBe(2);
    });

    it("should give zero coins on a roll of 1", () => {
        const state: GameState = new GameState(1);
        const player = state.players[0];
        player.establishments.push(new FlowerOrchard(player));
        expect(player.money).toBe(0);
        state.triggerEffects(1);
        expect(player.money).toBe(0);
    });
});