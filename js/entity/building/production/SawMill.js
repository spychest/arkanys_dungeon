import AbstractProductionBuilding from "./AbstractProductionBuilding.js";

export default class SawMill extends AbstractProductionBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 48,
            wood: 24,
            upgradeFactor: 1.6
        },
        this.initialTimeToUpgrade = 11;
    }

    getProduction() {
        return Math.floor(20*this.level*Math.pow(1.1, this.level));
    }

    getNextLevelEnergyNeeded() {
        return Math.floor(10 * this.level * Math.pow(1.1, this.level));
    }
}