import { Establishment } from "./establishment";
import { GameState } from "../gameState";

export class WheatField extends Establishment {
    constructor () {
        super();
        this.triggerNumbers = [1];
    }

    // refactor this abomination
    // have reference to owning player?
    changeState (state: GameState): void {
        state.players.forEach(player => {
            player.establishments.forEach(establishment => {
                if (typeof establishment === typeof this) {
                    player.money += 1;
                }
            });
        });
    }
}