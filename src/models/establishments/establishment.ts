import { GameState } from "../gameState";

export abstract class Establishment {
    triggerNumbers: Array<number>;

    public abstract changeState(state: GameState): void;

    public triggersOn(dieroll: number): boolean {
        return this.triggerNumbers.indexOf(dieroll) > -1;
    }
}