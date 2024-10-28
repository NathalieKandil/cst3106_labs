// Dice.js
// This module shows the functionality for rolling dice in the Yatzy game.

class Dice {
    constructor() {
        this.value = 1;
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
}

export default Dice;
