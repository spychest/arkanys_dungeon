import Building from "../AbstractBuilding.js";
export default class AbstractStorageBuilding extends Building {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 0,
            wood: 0,
        };
        this.initialTimeToUpgrade = 10;
    }

    setLevel(level) {
        this.level = level;
    }

    getNextLevelCost() {
        return {
            gold: Math.floor(this.initialCost.gold * Math.pow(2, this.level)),
            wood: Math.floor(this.initialCost.wood * Math.pow(2, this.level)),
        };
    }

    getStorage() {
        return Math.floor(10000*Math.pow(2, this.level));
    }

}