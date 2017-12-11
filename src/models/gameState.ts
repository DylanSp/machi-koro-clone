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

    public static createNewGame (numPlayers: number): GameState {
        const state: GameState = new GameState(numPlayers);
        for (let i = 0; i < numPlayers; i++) {
            state.players[i] = Player.createNewPlayer();
        }
        return state;
    }

    public triggerEffects(dieroll: number) {
        this.players.forEach(player => {
            player.establishments.forEach(establishment => {
                if (establishment.triggersOn(dieroll)) {
                    establishment.changeState(player);
                }
            });
        });
    }

}