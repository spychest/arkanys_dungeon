import Building from "../AbstractBuilding.js";

export default class AbstractProductionBuilding extends Building {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 0,
            wood: 0,
            upgradeFactor: 0
        };
        this.initialTimeToUpgrade = 1;
    }
    getLevel() {
        return this.level;
    }
    setLevel(level) {
        this.level = level;
    }
    getNextLevelCost() {
        return {
            gold: Math.floor(this.initialCost.gold * (Math.pow(this.initialCost.upgradeFactor, this.level+1) - Math.pow(this.initialCost.upgradeFactor, this.level)) / (this.initialCost.upgradeFactor - 1)),
            wood: Math.floor(this.initialCost.wood * (Math.pow(this.initialCost.upgradeFactor, this.level+1) - Math.pow(this.initialCost.upgradeFactor, this.level)) / (this.initialCost.upgradeFactor - 1)),
        }
    }
}