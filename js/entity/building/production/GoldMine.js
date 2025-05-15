import AbstractProductionBuilding from "./AbstractProductionBuilding.js";

export default class GoldMine extends AbstractProductionBuilding {
    constructor() {
        super();
        this.initialCost = {
            gold: 60,
            wood: 15,
            upgradeFactor: 1.5
        },
        this.initialTimeToUpgrade = 6;
    }

    getProduction() {
        return Math.floor(30*this.level*Math.pow(1.1, this.level));
    }

    getNextLevelEnergyNeeded() {
        return Math.floor(10 * (this.level+1) * Math.pow(1.1, this.level+1));
    }
}