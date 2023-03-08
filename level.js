export default class Level {
    constructor(difficulty) {
        this.difficulty = difficulty;

        if (difficulty === "easy") {
            this.numRounds = 10;
            this.timer = 90000;
        } else if (difficulty === "medium") {
            this.numRounds = 20;
            this.timer = 60000;
        } else {
            this.numRounds = 30;
            this.timer = 30000;
        }
    }
}