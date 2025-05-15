export default class City {
    constructor(position, name = null, isColonized = false) {
        this.position = position;
        this.name = name;
        this.isColonized = isColonized;
        this.owner = null;
        this.buildings = [];
        this.resources = {
            wood: 0,
            stone: 0,
            food: 0,
            gold: 0,
        };
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getIsColonized() {
        return this.isColonized;
    }

    setIsColonized(isColonized) {
        this.isColonized = isColonized;
    }

    setOwner(owner) {
        this.owner = owner;
    }
}