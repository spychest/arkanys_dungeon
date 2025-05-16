import AbstractMilitaryBuilding from './AbstractMilitaryBuilding.js';

export default class Laboratory extends AbstractMilitaryBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 200,
            wood: 400,
            stone: 200
        },
        this.initialTimeToUpgrade = 10;
    }
}
