import { GameState } from "../../models/game_state";

describe("initial game state", () => {
    it("should create the specified number of players", () => {
        const state: GameState = GameState.createNewGame(2);
        expect(state.players.length).toBe(2);
    });

    it("should give each player three coins", () => {
        const state: GameState = GameState.createNewGame(2);
        expect(state.players[0].money).toBe(3);
        expect(state.players[1].money).toBe(3);
    });
});