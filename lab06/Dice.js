// Dice.js
// This module enables the functionality for rolling dice in the Yatzy game.


class Dice {
    constructor() {
        this.value = 1; // Default value
        this.held = false; // Indicates if the die is held
    }

    roll() {
        if (!this.held) {
            this.value = Math.floor(Math.random() * 6) + 1; // Roll the die
        }
        return this.value;
    }
}

export default Dice;
