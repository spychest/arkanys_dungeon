import AbstractUnit from "../AbstractUnit.js";

export default class Paladin extends AbstractUnit {
    constructor() {
        super();
        this.name = "Paladin";
        this.description = "Guerrier sacré, résistant et capable de soigner.";
        this.initialCost = {
            gold: 20000,
            wood: 7000,
            stone: 2000
        };
        this.initialTimeToTrain = 4880;
    }
}
