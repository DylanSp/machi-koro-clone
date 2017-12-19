import { GameState } from "../../../models/gameState";
import { Bakery } from "../../../models/establishments/bakery";
import { Player } from "../../../models/player";

describe("Bakery", () => {
    describe("When owning player rolls", () => {
        let state: GameState;
        let player: Player;

        beforeEach(() => {
            state = new GameState(1);
            player = state.players[0];
            player.establishments.push(new Bakery(player));
        });

        it("should give one coin on a roll of 2", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 2);
            expect(player.money).toBe(1);
        });

        it("should give one coin on a roll of 3", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 3);
            expect(player.money).toBe(1);
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
            owningPlayer.establishments.push(new Bakery(owningPlayer));
        });

        it("should give zero coins on a roll of 2", () => {
            expect(owningPlayer.money).toBe(0);
            expect(triggeringPlayer.money).toBe(0);
            state.triggerEffects(triggeringPlayer, 2);
            expect(owningPlayer.money).toBe(0);
            expect(triggeringPlayer.money).toBe(0);
        });
    });

    describe("Output should be doubled by Shopping Mall", () => {
        let state: GameState;
        let player: Player;

        beforeEach(() => {
            state = new GameState(1);
            player = state.players[0];
            player.establishments.push(new Bakery(player));
            player.landmarkOwnership.set("Shopping Mall", true);
        });

        it("should give two coins on a roll of 2 when owning a Shopping Mall", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 2);
            expect(player.money).toBe(2);
        });

        it("should give zero coins on a roll of 1 when owning a Shopping Mall", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 1);
            expect(player.money).toBe(0);
        });
    });
});