import AbstractStorageBuilding from "./AbstractStorageBuilding.js";

export default class StoneStorage extends AbstractStorageBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 1000,
            wood: 1000
        };
        this.initialTimeToUpgrade = 10;
    }
}