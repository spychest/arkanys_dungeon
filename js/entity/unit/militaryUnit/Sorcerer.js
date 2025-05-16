import AbstractUnit from "../AbstractUnit.js";

export default class Sorcerer extends AbstractUnit {
    constructor() {
        super();
        this.name = "Enchanteur";
        this.description = "Spécialiste des sorts de soutien et de contrôle.";
        this.initialCost = {
            gold: 45000,
            wood: 15000,
            stone: 0
        };
        this.initialTimeToTrain = 10800;
    }
}
