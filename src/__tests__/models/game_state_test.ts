import { GameState } from "../../models/game_state";
import { WheatField } from "../../models/establishments/wheatField";
import { Bakery } from "../../models/establishments/bakery";


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

    it("should give each player two establishments", () => {
        const state: GameState = GameState.createNewGame(2);
        expect(state.players[0].establishments.length).toBe(2);
        expect(state.players[1].establishments.length).toBe(2);
    });

    it("should give each player a Wheat Field and a Bakery", () => {
        const state: GameState = GameState.createNewGame(2);
        expect(state.players[0].establishments[0]).toBeInstanceOf(WheatField);
        expect(state.players[0].establishments[1]).toBeInstanceOf(Bakery);
        expect(state.players[1].establishments[0]).toBeInstanceOf(WheatField);
        expect(state.players[1].establishments[1]).toBeInstanceOf(Bakery);
    });
});