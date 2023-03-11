import Die from 'die.js';
import Enemy from 'enemy.js';
import Level from 'level.js';
import Tower from 'tower.js';

// const D4 = new Die("D4", 4);
// const D6 = new Die("D6", 6);
// const D8 = new Die("D8", 8);
// const D10 = new Die("D10", 10);
// const D12 = new Die("D12", 12);
// const D20 = new Die("D20", 20);

class Game {
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.getContext("2d");
    }

    start() {

    }

    createSprite(width, height, color, x, y) {
        
    }
}

function startGame() {
    const newGame = new Game();
    newGame.start();
}
