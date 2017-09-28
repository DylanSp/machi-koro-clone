enum NumDiceRolled {
    One = 1,
    Two,
    ThreeChooseTwo
}

function rollGameDice (num: NumDiceRolled): number | number[] {
    switch (num) {
        case NumDiceRolled.One:
            return dieroll();
        case NumDiceRolled.Two:
            return dieroll() + dieroll();
        case NumDiceRolled.ThreeChooseTwo:
            const dieOne: number = dieroll();
            const dieTwo: number = dieroll();
            const dieThree: number = dieroll();
            return [dieOne + dieTwo, dieOne + dieThree, dieTwo + dieThree];
    }
}

function dieroll (): number {
    return Math.random() * 6 + 1;
}