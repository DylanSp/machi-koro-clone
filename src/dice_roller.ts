type NumDiceRolled = "One" | "Two" | "ThreeChooseTwo";

function rollGameDice (num: NumDiceRolled): number | number[] {
    switch (num) {
        case "One":
            return dieroll();
        case "Two":
            return dieroll() + dieroll();
        case "ThreeChooseTwo":
            const dieOne: number = dieroll();
            const dieTwo: number = dieroll();
            const dieThree: number = dieroll();
            return [dieOne + dieTwo, dieOne + dieThree, dieTwo + dieThree];
    }
}

function dieroll (): number {
    return Math.random() * 6 + 1;
}