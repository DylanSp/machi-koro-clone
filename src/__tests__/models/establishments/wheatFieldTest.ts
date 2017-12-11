import { GameState } from "../../../models/gameState";
import { WheatField } from "../../../models/establishments/wheatField";

describe("Wheat Field", () => {
    it("should give one coin on a roll of 1", () => {
        const state: GameState = new GameState(1);
        const player = state.players[0];
        player.establishments.push(new WheatField(player));
        expect(player.money).toBe(0);
        state.triggerEffects(1);
        expect(player.money).toBe(1);
    });

    it("should give zero coins on a roll of 2", () => {
        const state: GameState = new GameState(1);
        const player = state.players[0];
        player.establishments.push(new WheatField(player));
        expect(player.money).toBe(0);
        state.triggerEffects(2);
        expect(player.money).toBe(0);
    });
});