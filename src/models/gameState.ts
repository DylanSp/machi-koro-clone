// note - NOT immutable; change that?

import { Player } from "./player";

export class GameState {
    public players: Array<Player>;

    constructor(numPlayers: number) {
        this.players = new Array<Player>();
        for (let i = 0; i < numPlayers; i++) {
            this.players.push(new Player());
        }
    }

    static createNewGame (numPlayers: number): GameState {
        const state: GameState = new GameState(numPlayers);
        for (const player of state.players) {
            player.money = 3;
        }
        return state;
    }

}