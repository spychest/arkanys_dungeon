import AbstractMilitaryBuilding from './AbstractMilitaryBuilding.js';
export default class Barack extends AbstractMilitaryBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 400,
            wood: 200,
            stone: 100
        },
        this.initialTimeToUpgrade = 6;
    }
}