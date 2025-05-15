import AbstractStorageBuilding from "./AbstractStorageBuilding.js";

export default class WoodStorage extends AbstractStorageBuilding {
    constructor() {
        super();
        this.level = 0;
        this.initialCost = {
            gold: 1000,
            wood: 500
        };
        this.initialTimeToUpgrade = 10;
    }
}