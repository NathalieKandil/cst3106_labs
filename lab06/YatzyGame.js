// YatzyGame.js
// This module manages the game state and player interactions for the Yatzy game.

import Dice from './Dice.js';
import YatzyEngine from './YatzyEngine.js';

class YatzyGame {
    constructor() {
        this.dice = Array.from({ length: 5 }, () => new Dice());
        this.engine = new YatzyEngine();
        this.currentRoll = 0; // Number of rolls in the current turn
    }

    rollDice() {
        this.dice.forEach(die => die.roll());
        this.currentRoll++;
        // Additional logic to handle the game state
    }

    holdDice(index) {
        if (this.dice[index]) {
            this.dice[index].held = true; // Mark the die as held
        }
    }

    // Other methods to manage game state
}

export default YatzyGame;
