import AbstractProductionBuilding from "./AbstractProductionBuilding.js";

export default class MagicalPlant extends AbstractProductionBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 75,
            wood: 30,
            upgradeFactor: 1.5
        }
    }

    getProduction() {
        return Math.floor(20 * this.level * Math.pow(1.1, this.level));
    }
}