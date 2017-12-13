import { GameState } from "../../../models/gameState";
import { WheatField } from "../../../models/establishments/wheatField";
import { Player } from "../../../models/player";

describe("Wheat Field", () => {
    describe("When owning player rolls", () => {
        let state: GameState;
        let player: Player;

        beforeEach(() => {
            state = new GameState(1);
            player = state.players[0];
            player.establishments.push(new WheatField(player));
        });

        it("should give one coin on a roll of 1", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 1);
            expect(player.money).toBe(1);
        });

        it("should give zero coins on a roll of 2", () => {
            expect(player.money).toBe(0);
            state.triggerEffects(player, 2);
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
            owningPlayer.establishments.push(new WheatField(owningPlayer));
        });

        it("should give one coin on a roll of 1", () => {
            expect(owningPlayer.money).toBe(0);
            state.triggerEffects(triggeringPlayer, 1);
            expect(owningPlayer.money).toBe(1);
        });

        it("should give zero coins on a roll of 2", () => {
            expect(owningPlayer.money).toBe(0);
            state.triggerEffects(triggeringPlayer, 2);
            expect(owningPlayer.money).toBe(0);
        });
    });
});