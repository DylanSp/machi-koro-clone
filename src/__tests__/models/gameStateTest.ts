import { GameState } from "../../models/gameState";
import { WheatField } from "../../models/establishments/wheatField";
import { Bakery } from "../../models/establishments/bakery";
import { Player } from "../../models/player";


describe("initial game state", () => {
    let state: GameState;

    beforeEach(() => {
        state = GameState.createNewGame(2);
    });

    it("should create the specified number of players", () => {
        expect(state.players).toHaveLength(2);
    });

    it("should give each player three coins", () => {
        expect(state.players[0].money).toBe(3);
        expect(state.players[1].money).toBe(3);
    });

    it("should give each player two establishments", () => {
        expect(state.players[0].establishments).toHaveLength(2);
        expect(state.players[1].establishments).toHaveLength(2);
    });

    it("should give each player a Wheat Field and a Bakery", () => {
        expect(state.players[0].establishments[0]).toBeInstanceOf(WheatField);
        expect(state.players[0].establishments[1]).toBeInstanceOf(Bakery);
        expect(state.players[1].establishments[0]).toBeInstanceOf(WheatField);
        expect(state.players[1].establishments[1]).toBeInstanceOf(Bakery);
    });
});

describe("victory checking", () => {
    let state: GameState;

    beforeEach(() => {
        state = GameState.createNewGame(2);
    });

    it("should show no one having won at game start", () => {
        expect(state.winningPlayer()).toBeUndefined();
    });

    it("should show someone has won once they have all six landmarks", () => {
        const winningPlayer: Player = state.players[1];
        winningPlayer.landmarkOwnership.set("Harbor", true);
        winningPlayer.landmarkOwnership.set("Train Station", true);
        winningPlayer.landmarkOwnership.set("Shopping Mall", true);
        winningPlayer.landmarkOwnership.set("Amusement Park", true);
        winningPlayer.landmarkOwnership.set("Moon Tower", true);
        winningPlayer.landmarkOwnership.set("Airport", true);
        expect(state.winningPlayer()).toBe(winningPlayer);
    });
});