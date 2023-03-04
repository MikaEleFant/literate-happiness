/* Stats: {
    strength: int,
    dexterity: int,
    constitution: int,
    intelligence: int,
    wisdom: int,
    charisma: int
}; */

/* Stats for Player lvl 1: {
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1
}; */

export default class Entity {
    constructor(name, hp, mp, job, level, stats) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.job = job;
        this.level = level;
        this.stats = stats;
    }
}