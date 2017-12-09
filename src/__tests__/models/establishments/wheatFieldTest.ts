import { GameState } from "../../../models/gameState";
import { WheatField } from "../../../models/establishments/wheatField";

describe("Wheat Field", () => {
    it("should give one coin on a roll of 1", () => {
        const state: GameState = new GameState(1);
        state.players[0].establishments.push(new WheatField());
        expect(state.players[0].money).toBe(0);
        state.triggerEffects(1);
        expect(state.players[0].money).toBe(1);
    });

    it("should give zero coins on a roll of 2", () => {
        const state: GameState = new GameState(1);
        state.players[0].establishments.push(new WheatField());
        expect(state.players[0].money).toBe(0);
        state.triggerEffects(2);
        expect(state.players[0].money).toBe(0);
    });
});