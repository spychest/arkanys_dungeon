import AbstractMilitaryBuilding from './AbstractMilitaryBuilding.js';

export default class Library extends AbstractMilitaryBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            wood: 50000,
            stone: 100000,
            magicalEnergy: 1000
        },
        this.initialTimeToUpgrade = 1;
    }
}
