// YatzyGame.js
// This module manages the game state and player interactions for the Yatzy game.

import Dice from './Dice.js';
import YatzyEngine from './YatzyEngine.js';

class YatzyGame {
    constructor() {
        this.dice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
        this.yatzyEngine = new YatzyEngine();
    }

    rollDice() {
        // Logic to roll all dice that haven't been kept
    }

    updateScore() {
        // Logic to update the game score
    }
}

export default YatzyGame;
