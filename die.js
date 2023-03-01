class Die {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }

    roll() {
        return Math.floor(Math.random * sides) + 1;
    }
}