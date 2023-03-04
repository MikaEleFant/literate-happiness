export default class Level {
    constructor(levelNumber) {
        this.levelNumber = levelNumber;

        this.size = [(levelNumber * 5) + 5, (levelNumber * 5) + 5];
        this.numTraps = levelNumber * 3;
        this.numEnemies = levelNumber * 2 + 4;
    }
}