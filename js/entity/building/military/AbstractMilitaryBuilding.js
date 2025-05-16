import Building from "../AbstractBuilding.js";
export default class AbstractProductionBuilding extends Building {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 0,
            wood: 0,
            stone: 0,
            upgradeFactor: 0
        };
        this.initialTimeToUpgrade = 1;
    }
    getNextLevelCost() {
        return {
            gold: Math.floor(this.initialCost.gold * Math.pow(2, this.level)),
            wood: Math.floor(this.initialCost.wood * Math.pow(2, this.level)),
            stone: Math.floor(this.initialCost.stone * Math.pow(2, this.level))
        };
    }
}