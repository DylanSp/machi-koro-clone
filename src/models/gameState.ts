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

    public triggerEffects(triggeringPlayer: Player, dieroll: number) {
        this.players.forEach(player => {
            player.establishments.forEach(establishment => {
                if (establishment.triggersOn(dieroll)) {
                    establishment.changeState(triggeringPlayer);
                }
            });
        });
    }

    public winningPlayer(): Player | undefined {
        // intentionally uninitialized; will still be undefined if no one's won
        let winningPlayer;
        this.players.forEach(player => {
            if (player.hasWon()) {
                winningPlayer = player;
            }
        });
        return winningPlayer;
    }
}