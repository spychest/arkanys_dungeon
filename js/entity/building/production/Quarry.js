import AbstractProductionBuilding from "./AbstractProductionBuilding.js";

export default class Quarry extends AbstractProductionBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 225,
            wood: 75,
            upgradeFactor: 1.5
        },
        this.initialTimeToUpgrade = 19;
    }
    getProduction() {
        return Math.floor(10*this.level*Math.pow(1.1, this.level));
    }
    getNextLevelEnergyNeeded() {
        return Math.floor(20 * this.level * Math.pow(1.1, this.level));
    }
}